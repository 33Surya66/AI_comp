import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                <span className="block">Compare AI Models</span>
                <span className="block text-blue-200">with InsightAI</span>
              </h1>
              <p className="mt-4 text-lg text-blue-100 max-w-xl">
                Discover the performance differences between various AI models like ChatGPT 1.5, DeepSeek, and more through interactive Power BI dashboards.
              </p>
              <div className="mt-8 flex">
                <Link to="/dashboard" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-md">
                  View Dashboards
                </Link>
                <Link to="/about" className="ml-4 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:w-1/2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="p-2 bg-gray-100">
                    <div className="flex">
                      <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="px-4 py-8 bg-white">
                    <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
                    <div className="mt-4 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="mt-2 h-6 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Powerful analytics to help you understand AI model performance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Performance Metrics</h3>
            <p className="mt-2 text-gray-600">
              Comprehensive metrics for comparing the speed, accuracy, and efficiency of different AI models.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">In-depth Analysis</h3>
            <p className="mt-2 text-gray-600">
              Drill down into specific tasks and see how each AI model performs in various scenarios.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Interactive Dashboards</h3>
            <p className="mt-2 text-gray-600">
              Power BI dashboards that allow you to filter, sort, and explore data in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* AI Models Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Featured AI Models</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Compare the latest and most advanced AI models in the market
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'ChatGPT 1.5', color: 'bg-green-100', textColor: 'text-green-800' },
              { name: 'DeepSeek', color: 'bg-blue-100', textColor: 'text-blue-800' },
              { name: 'Claude 3', color: 'bg-purple-100', textColor: 'text-purple-800' },
              { name: 'Llama 3', color: 'bg-red-100', textColor: 'text-red-800' },
            ].map((model, index) => (
              <div key={index} className={`${model.color} rounded-lg p-6 shadow-md`}>
                <h3 className={`text-lg font-medium ${model.textColor}`}>{model.name}</h3>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className={`h-2 rounded-full ${model.textColor.replace('text', 'bg')} w-${Math.floor(Math.random() * 3) + 7}/12`}></div>
                </div>
                <Link to="/comparison" className={`mt-4 inline-block text-sm font-medium ${model.textColor}`}>
                  View performance →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;