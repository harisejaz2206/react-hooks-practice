// ./components/LocationPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const LocationPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Current Location Information</h2>
      <p><strong>Pathname:</strong> {location.pathname}</p>
      <p><strong>Search:</strong> {location.search}</p>
      <p><strong>Hash:</strong> {location.hash}</p>
    </div>
  );
};

export default LocationPage;