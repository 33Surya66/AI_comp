// File: src/pages/Comparison.jsx
import { useState } from 'react';

const Comparison = () => {
  const [selectedModels, setSelectedModels] = useState({
    'ChatGPT 1.5': true,
    'DeepSeek': true,
    'Claude 3': false,
    'Llama 3': false,
  });
  
  const [selectedMetrics, setSelectedMetrics] = useState({
    'accuracy': true,
    'speed': true,
    'tokenization': false,
    'reasoning': false,
    'creativity': false,
  });
  
  const toggleModel = (model) => {
    setSelectedModels({
      ...selectedModels,
      [model]: !selectedModels[model]
    });
  };
  
  const toggleMetric = (metric) => {
    setSelectedMetrics({
      ...selectedMetrics,
      [metric]: !selectedMetrics[metric]
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Model Comparison</h1>
        <p className="mt-2 text-lg text-gray-600">
          Compare performance metrics across different AI models
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with filters */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Comparison Settings</h2>
            
            {/* Model Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Select Models</h3>
              <div className="space-y-2">
                {Object.keys(selectedModels).map((model) => (
                  <div key={model} className="flex items-center">
                    <input
                      id={`model-${model}`}
                      name={`model-${model}`}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={selectedModels[model]}
                      onChange={() => toggleModel(model)}
                    />
                    <label htmlFor={`model-${model}`} className="ml-2 block text-sm text-gray-900">
                      {model}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Metrics Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Select Metrics</h3>
              <div className="space-y-2">
                {Object.keys(selectedMetrics).map((metric) => (
                  <div key={metric} className="flex items-center">
                    <input
                      id={`metric-${metric}`}
                      name={`metric-${metric}`}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={selectedMetrics[metric]}
                      onChange={() => toggleMetric(metric)}
                    />
                    <label htmlFor={`metric-${metric}`} className="ml-2 block text-sm text-gray-900 capitalize">
                      {metric}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Task Type Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Task Type</h3>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>Text Generation</option>
                <option>Code Generation</option>
                <option>Q&amp;A</option>
                <option>Summarization</option>
                <option>Translation</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="lg:col-span-3">
          {/* Comparison Charts */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-900">Performance Comparison</h2>
            </div>
            <div className="p-6">
              {/* Placeholder for chart - would be a Power BI component in the real app */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500">Performance comparison chart would appear here</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Data Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Detailed Metrics</h2>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Export as CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Model
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Accuracy
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Speed (tokens/sec)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Memory Usage
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: 'ChatGPT 1.5', accuracy: '94.3%', speed: '135', memory: '12GB', score: '8.7' },
                    { name: 'DeepSeek', accuracy: '92.1%', speed: '142', memory: '14GB', score: '8.5' },
                    { name: 'Claude 3', accuracy: '95.7%', speed: '128', memory: '16GB', score: '8.9' },
                    { name: 'Llama 3', accuracy: '93.5%', speed: '156', memory: '10GB', score: '8.6' },
                  ].filter(model => selectedModels[model.name]).map((model, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {model.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {model.accuracy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {model.speed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {model.memory}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {model.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Data shown is representative of model performance on standard benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
