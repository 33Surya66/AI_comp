// File: src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Comparison from './pages/Comparison';
import About from './pages/About';
import Prediction from './pages/Prediction.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/about" element={<About />} />
            <Route path="prediction" element={<Prediction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;