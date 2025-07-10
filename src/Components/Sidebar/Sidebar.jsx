import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Sidebar.css';

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const sidebarRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) toggleMenu();
    };

    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        toggleMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>
        <img
          src="https://img.icons8.com/?size=100&id=cqnbIxuxL4Si&format=png&color=ffffff"
          alt="Close Menu"
        />
      </button>

      <nav>
        <li onClick={() => { navigate("/"); toggleMenu(); }}>Home</li>
        <li onClick={() => { navigate("/courses"); toggleMenu(); }}>Courses</li>
        <li onClick={() => { navigate("/podcast"); toggleMenu(); }}>Podcast</li>
        <li onClick={() => { navigate("/games"); toggleMenu(); }}>Games</li>
        <li onClick={() => { navigate("/subscription"); toggleMenu(); }}>Subscribe</li>
        <li onClick={() => { navigate("/services"); toggleMenu(); }}>Services</li>
        <li onClick={() => { navigate("/aboutus"); toggleMenu(); }}>About us</li>
      </nav>
    </div>
  );
};

export default Sidebar;
