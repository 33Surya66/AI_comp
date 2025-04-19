import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold">InsightAI</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={`${isActive('/') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Home
                </Link>
                <Link to="/dashboard" className={`${isActive('/dashboard') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Dashboard
                </Link>
                {/* <Link to="/comparison" className={`${isActive('/comparison') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} px-3 py-2 rounded-md text-sm font-medium`}>
                  AI Comparison
                </Link> */}
                <Link to="/about" className={`${isActive('/about') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} px-3 py-2 rounded-md text-sm font-medium`}>
                  About
                </Link>
                {/* <NavLink to="/prediction" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Churn Prediction
                </NavLink> */}
                <Link to="/prediction" onClick={() => setIsMenuOpen(false)} className={`${isActive('/churn') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} block px-3 py-2 rounded-md text-base font-medium`}>
                  Churn Prediction
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`${isActive('/') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} block px-3 py-2 rounded-md text-base font-medium`}>
              Home
            </Link>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className={`${isActive('/dashboard') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} block px-3 py-2 rounded-md text-base font-medium`}>
              Dashboard
            </Link>
            {/* <Link to="/comparison" onClick={() => setIsMenuOpen(false)} className={`${isActive('/comparison') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} block px-3 py-2 rounded-md text-base font-medium`}>
              AI Comparison
            </Link> */}
            {/* <NavLink to="/prediction" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Churn Prediction
            </NavLink> */}
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`${isActive('/about') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} block px-3 py-2 rounded-md text-base font-medium`}>
              About
            </Link>
            <Link to="/churn" onClick={() => setIsMenuOpen(false)} className={`${isActive('/churn') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75'} block px-3 py-2 rounded-md text-base font-medium`}>
              Churn Prediction
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
