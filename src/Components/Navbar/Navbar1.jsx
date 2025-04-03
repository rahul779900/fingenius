import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
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
            <img src='https://img.icons8.com/?size=100&id=83195&format=png&color=ffffff'/>
          </div>
        </div>

        
      </nav>

      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;