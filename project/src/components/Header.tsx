import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight as ChessKnight, LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2" onClick={() => navigate('/')} role="button">
            <ChessKnight size={32} className="text-yellow-500" />
            <span className="text-2xl font-bold">CheckmateHub</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <button onClick={() => navigate('/login')} className="hover:text-yellow-500">Login</button>
                <button onClick={() => navigate('/register')} className="hover:text-yellow-500">Register</button>
              </>
            ) : (
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 hover:text-yellow-500"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;