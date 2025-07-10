import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Sidebar from '../Sidebar/Sidebar';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="menu-button" onClick={toggleMenu}>
            <img
              src="https://img.icons8.com/?size=100&id=83195&format=png&color=ffffff"
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
          <Link to="/chatbot" className="chatbot-link">
            <img src={assets.bot} alt="Chatbot" />
          </Link>

          <div className="login-section">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="signin-button">Sign In</button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>

      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
