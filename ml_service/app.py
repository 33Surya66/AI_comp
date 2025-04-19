from flask import Flask, request, jsonify
import joblib
import pandas as pd
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your React frontend

# Load models and preprocessing components
kmeans = joblib.load('models/kmeans_model.joblib')
classifier = joblib.load('models/voting_classifier_model.joblib')
scaler = joblib.load('models/scaler.joblib')
# Uncomment these if you have them saved
# ohe = joblib.load('models/onehotencoder.joblib')
# le = joblib.load('models/labelencoder.joblib') 

# Define required feature columns
cluster_features = ['Session_Duration_sec', 'User_Experience_Score', 'User_Rating']
categorical_cols = []  # Add your categorical columns here if any

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        # Get data from request
        data = request.json
        print("Received data:", data)
        
        # Create DataFrame from input data
        input_df = pd.DataFrame([data])
        
        # Handle date if present
        if 'Date' in input_df.columns:
            date = pd.to_datetime(input_df['Date'])
            input_df['Year'] = date.dt.year
            input_df['Month'] = date.dt.month
            input_df['Day'] = date.dt.day
            input_df = input_df.drop(columns=['Date'])
        
        # Get cluster features and scale
        X_cluster = input_df[cluster_features]
        X_scaled = scaler.transform(X_cluster)
        cluster = int(kmeans.predict(X_scaled)[0])
        
        # Prepare data for classification
        input_df_with_cluster = input_df.copy()
        input_df_with_cluster['Cluster_Label'] = cluster
        
        # Remove non-feature columns if present
        features_to_drop = ['User_ID', 'Input_Text', 'Churned_Users']
        for col in features_to_drop:
            if col in input_df_with_cluster.columns:
                input_df_with_cluster = input_df_with_cluster.drop(columns=[col])
        
        # One-hot encode the data
        X_encoded = pd.get_dummies(input_df_with_cluster, drop_first=True)
        
        # Ensure columns match training data
        missing_cols = set(classifier.feature_names_in_) - set(X_encoded.columns)
        for col in missing_cols:
            X_encoded[col] = 0
        
        # Reorder columns to match training data
        X_encoded = X_encoded[classifier.feature_names_in_]
        
        # Make predictions
        prediction = int(classifier.predict(X_encoded)[0])
        probability = float(classifier.predict_proba(X_encoded)[0][1])

        # Convert prediction label if you have a label encoder
        # prediction_label = le.inverse_transform([prediction])[0]
        prediction_label = "Churn" if prediction == 1 else "Stay"
        
        return jsonify({
            'cluster': cluster,
            'prediction': prediction_label,
            'churn_probability': probability
        })
    
    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)