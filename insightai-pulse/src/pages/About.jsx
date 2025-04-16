const About = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">About InsightAI</h1>
          <p className="mt-2 text-lg text-gray-600">
            Learn more about our AI model comparison platform
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            InsightAI was created to provide transparent, data-driven comparisons between various AI language models available in the market today. Our platform uses Power BI dashboards to visualize complex performance metrics in an accessible way.
          </p>
          <p className="text-gray-600">
            We believe that understanding the strengths and weaknesses of different AI models is crucial for businesses and researchers to make informed decisions about which technology best fits their specific needs.
          </p>
        </div>
        
        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Data Collection</h3>
              <p className="text-gray-600">
                We collect comprehensive performance data by running standardized tests across multiple AI models.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">
                Our team analyzes the results to identify key performance indicators and meaningful patterns.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Visualization</h3>
              <p className="text-gray-600">
                We create intuitive Power BI dashboards that make complex data easy to understand and interact with.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Alex Johnson', role: 'Founder & Data Scientist', image: 'person1' },
              { name: 'Maria Rodriguez', role: 'AI Research Lead', image: 'person2' },
              { name: 'David Chen', role: 'Power BI Developer', image: 'person3' },
            ].map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-32 w-32 bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Get in Touch</h2>
              <p className="text-blue-700 mb-4">
                Have questions about our AI model comparison platform? We'd love to hear from you!
              </p>
              <p className="text-blue-600">
                Email us at: <a href="mailto:contact@insightai.com" className="font-medium">contact@insightai.com</a>
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 md:flex-1">
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your message here..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  