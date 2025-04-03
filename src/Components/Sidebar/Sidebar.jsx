import React from "react";
import { useNavigate } from "react-router-dom";
import './Sidebar.css';

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>
        <img src="https://img.icons8.com/?size=100&id=cqnbIxuxL4Si&format=png&color=ffffff" alt="Close Menu" />
      </button>

      <nav>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/courses")}>Courses</li>
        <li onClick={() => navigate("/podcast")}>Podcast</li>
        <li onClick={() => navigate("/games")}>Games</li>
        <li onClick={() => navigate("/subscription")} >Subscribe</li>
        <li onClick={() => navigate("/services")} >Services</li>
        <li onClick={() => navigate("/aboutus")} >About us</li>
      </nav>
    </div>
  );
};

export default Sidebar;
