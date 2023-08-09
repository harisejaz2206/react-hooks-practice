import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 m-4 max-w-sm mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <p className="text-xl mb-2">Welcome to your profile!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
