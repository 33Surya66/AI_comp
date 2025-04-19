import React, { useState } from 'react';
import { predictChurn } from '../services/api';

const ChurnPrediction = () => {
  const [formData, setFormData] = useState({
    Session_Duration_sec: '',
    User_Experience_Score: '',
    User_Rating: ''
  });
  
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Convert string values to numbers
      const numericData = {};
      Object.entries(formData).forEach(([key, value]) => {
        numericData[key] = parseFloat(value);
      });
      
      const result = await predictChurn(numericData);
      setPrediction(result);
    } catch (err) {
      setError('Error making prediction. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Customer Churn Prediction</h2>
      
      <div className="mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-gray-300">Session Duration (seconds)</label>
            <input
              type="number"
              name="Session_Duration_sec"
              value={formData.Session_Duration_sec}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 focus:border-blue-700 focus:ring-blue-800"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-gray-300">User Experience Score (1-10)</label>
            <input
              type="number"
              name="User_Experience_Score"
              value={formData.User_Experience_Score}
              onChange={handleChange}
              min="1"
              max="10"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 focus:border-blue-700 focus:ring-blue-800"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-gray-300">User Rating</label>
            <input
              type="number"
              name="User_Rating"
              value={formData.User_Rating}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 focus:border-blue-700 focus:ring-blue-800"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-2 px-4 rounded font-medium ${
              loading 
                ? 'bg-gray-800 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-900 hover:bg-blue-800 text-blue-100 border border-blue-800'
            }`}
          >
            {loading ? 'Processing...' : 'Predict Churn'}
          </button>
        </form>
      </div>
      
      {error && (
        <div className="p-4 mb-4 bg-red-900 border border-red-800 text-red-200 rounded">
          {error}
        </div>
      )}
      
      {prediction && (
        <div className={`p-6 rounded-lg border ${
          prediction.prediction === 'Churn' 
            ? 'bg-red-900/20 border-red-800' 
            : 'bg-green-900/20 border-green-800'
        }`}>
          <h3 className="text-xl font-bold mb-4">Prediction Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-800 rounded">
              <span className="text-gray-400 block text-sm">Customer Segment</span>
              <span className="text-xl font-medium">Cluster {prediction.cluster}</span>
            </div>
            
            <div className="p-3 bg-gray-800 rounded">
              <span className="text-gray-400 block text-sm">Prediction</span>
              <span className={`text-xl font-medium ${
                prediction.prediction === 'Churn' ? 'text-red-400' : 'text-green-400'
              }`}>
                {prediction.prediction}
              </span>
            </div>
            
            <div className="p-3 bg-gray-800 rounded md:col-span-2">
              <span className="text-gray-400 block text-sm">Churn Probability</span>
              <div className="flex items-center mt-1">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      prediction.prediction === 'Churn' ? 'bg-red-600' : 'bg-green-600'
                    }`}
                    style={{ width: `${prediction.churn_probability * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 font-medium">
                  {(prediction.churn_probability * 100).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChurnPrediction;