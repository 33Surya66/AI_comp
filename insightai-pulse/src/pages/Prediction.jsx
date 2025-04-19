import React from 'react';
import ChurnPrediction from '../components/ChurnPrediction';

const Prediction = () => {
  return (
    <div className="prediction-page">
      <h1>Customer Churn Analysis</h1>
      <p>Use this tool to predict customer churn probability based on their behavioral data.</p>
      <ChurnPrediction />
    </div>
  );
};

export default Prediction;