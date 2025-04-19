import axios from 'axios';

// Base URL for API calls - Updated to point to Flask backend
const API_URL = 'http://localhost:5000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const predictChurn = async (userData) => {
  try {
    const response = await apiClient.post('/predict', userData);
    return response.data;
  } catch (error) {
    console.error('Prediction API error:', error);
    throw error;
  }
};

export default {
  predictChurn,
};