import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Star, Users, Clock, ChevronRight, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Suchithra',
    email: 'Suchithra@gmail.com',
    rating: 2100,
  });

  const profiles = [
    { name: 'Jahnavi', email: 'Jahnavi@gmail.com', rating: 2850 },
    { name: 'Varshitha', email: 'Varshitha@gmail.com', rating: 2750 },
    
  ];

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // TODO: Implement account deletion logic
      navigate('/login');
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed" 
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlend: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <div className="text-center">
              {isEditing ? (
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <User size={64} className="mx-auto text-gray-600" />
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                <>
                  <User size={64} className="mx-auto text-gray-600" />
                  <h2 className="text-2xl font-bold mt-4">{userProfile.name}</h2>
                  <p className="text-gray-600">{userProfile.email}</p>
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <Star className="text-yellow-500" />
                    <span className="font-bold">{userProfile.rating}</span>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="mt-2 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
                  >
                    <Trash2 size={16} />
                    <span>Delete Account</span>
                  </button>
                </>
              )}
            </div>

            {/* Other Players */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Top Players</h3>
              <div className="space-y-4">
                {profiles.filter(p => p.email !== userProfile.email).map((profile, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <User size={24} className="text-gray-600" />
                      <div>
                        <p className="font-semibold">{profile.name}</p>
                        <p className="text-sm text-gray-600">{profile.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-bold">{profile.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Game Options */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Users className="text-blue-600" size={32} />
                  <div>
                    <h3 className="text-xl font-bold">Find Players</h3>
                    <p className="text-gray-600">Match with players of similar rating</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <ChevronRight className="text-green-600" size={32} />
                  <div>
                    <h3 className="text-xl font-bold">Play vs Computer</h3>
                    <p className="text-gray-600">Practice against AI</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Clock className="text-purple-600" size={32} />
                  <div>
                    <h3 className="text-xl font-bold">Quick Match</h3>
                    <p className="text-gray-600">5 minute blitz games</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Settings className="text-gray-600" size={32} />
                  <div>
                    <h3 className="text-xl font-bold">Game Settings</h3>
                    <p className="text-gray-600">Customize your experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;