import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import Sidebar from '../Sidebar/Sidebar';
import './Navbard.css';

const Navbard = ({ setShowLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignInClick = () => {
    setShowLogin(true); 
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="menu-button">
            <img 
              src='https://img.icons8.com/?size=100&id=83195&format=png&color=ffffff'
              alt="Menu"
            />
          </div>
          <input 
            type="text"
            placeholder="Search..." 
            className="search-input"
          />
        </div>

        <div className="nav-right">
          <div>
          <img src={assets.bot} alt="Chatbot" />
          </div>
            
          
          <button 
            className="signin-button"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </div>
      </nav>

      <Sidebar />
    </>
  );
};

export default Navbard;