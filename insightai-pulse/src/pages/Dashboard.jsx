import { useState } from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Model Dashboards</h1>
        <p className="mt-2 text-lg text-gray-600">
          Interactive Power BI dashboards showing comprehensive AI model comparison metrics
        </p>
      </div>
      
      {/* Dashboard Content */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">AI Models Overview</h2>
            <div className="flex space-x-2">
              {/* <button className="px-3 py-1 bg-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-300">
                Export
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-300">
                Filter
              </button> */}
            </div>
          </div>
          <div className="p-1 bg-gray-100">
            {/* Integrated Power BI Dashboard */}
            <div className="bg-white rounded">
              <iframe 
                title="INSIGHT__AI" 
                width="1140" 
                height="541.25" 
                src="https://app.powerbi.com/reportEmbed?reportId=87986e92-c819-40c7-b2aa-0a81717ed3bc&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1" 
                frameBorder="0" 
                allowFullScreen="true">
              </iframe>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm text-gray-500">
              This dashboard provides an overview of AI model metrics.
            </p>
          </div>
        </div>
      </div>
      
      {/* Dashboard Instructions */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-800 mb-3">Using the Dashboard</h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Hover over data points for detailed information
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Use filters to narrow down results by model type, task, or metric
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;