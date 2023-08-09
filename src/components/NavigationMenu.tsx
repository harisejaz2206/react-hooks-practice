import React from 'react';
import { useMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  const profileMatch = useMatch('/profile');
  const aboutMatch = useMatch('/about');

  return (
    <nav className="flex space-x-4">
      <Link
        to="/profile"
        className={`px-4 py-2 rounded ${profileMatch ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-100'}`}
      >
        Profile
      </Link>
      <Link
        to="/about"
        className={`px-4 py-2 rounded ${aboutMatch ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-100'}`}
      >
        About
      </Link>
    </nav>
  );
};

export default NavigationMenu;
