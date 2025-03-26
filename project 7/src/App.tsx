import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import HomePage from './components/HomePage';
import ClaimsDashboard from './components/ClaimsDashboard';
import ClaimDetail from './components/ClaimDetail';

function AppContent() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-white rounded">
                <div className="w-6 h-6 bg-blue-800"></div>
              </div>
              <h1 className="text-3xl font-bold">True<span className="text-blue-200">Claim</span></h1>
            </div>
            <div className="flex space-x-6">
              <button 
                onClick={() => navigate('/')} 
                className="hover:text-blue-200"
              >
                HOME
              </button>
              <button 
                onClick={() => navigate('/claims')} 
                className="hover:text-blue-200"
              >
                Claims
              </button>
              <a href="#" className="hover:text-blue-200">Help & Support</a>
            </div>
            <div className="text-sm">
              <div>BUILD: 2.21</div>
              <div>Logged in as: Username (1:24 pm)</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/claims" element={<ClaimsDashboard />} />
        <Route path="/claims/:id" element={<ClaimDetail />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;