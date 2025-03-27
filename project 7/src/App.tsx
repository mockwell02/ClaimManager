import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ClaimsDashboard from './components/ClaimsDashboard';
import ClaimDetail from './components/ClaimDetail';

function AppContent() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <header className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/mcdonalds-logo.png" 
                alt="McDonald's Logo" 
                className="h-14 w-auto cursor-pointer"
                onClick={() => navigate('/')}
              />
            </div>
            <div className="flex space-x-4 md:space-x-6 mt-2 sm:mt-0">
              <button 
                onClick={() => navigate('/')} 
                className="text-sm md:text-base hover:text-mcdonalds-orange font-medium transition-colors duration-200"
              >
                HOME
              </button>
              <button 
                onClick={() => navigate('/claims')} 
                className="text-sm md:text-base hover:text-mcdonalds-orange font-medium transition-colors duration-200"
              >
                Claims
              </button>
              <a href="#" className="text-sm md:text-base hover:text-mcdonalds-orange font-medium transition-colors duration-200">
                Help & Support
              </a>
            </div>
            <div className="text-xs md:text-sm mt-2 sm:mt-0 w-full sm:w-auto text-center sm:text-right">
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