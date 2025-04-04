import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"; // Corrected import path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [headerGradient, setHeaderGradient] = useState(generateRandomGradient());

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderGradient(generateRandomGradient());
    }, 3600000); // Change gradient every hour (3600000 ms)

    return () => clearInterval(interval);
  }, []);

  function generateRandomGradient() {
    const colors = [
      ["#4a148c", "#880e4f"],
      ["#667eea", "#764ba2"],
      ["#1e3c72", "#2a5298"],
      ["#4a148c", "#1a237e"],
      ["#8e2de2", "#4a00e0"],
      ["#1488cc", "#2b32b2"],
      ["#00c6ff", "#0072ff"],
      ["#ff5f6d", "#ffc371"],
      ["#c0392b", "#8e44ad"],
    ];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${randomColors[0]}, ${randomColors[1]})`;
  }

  return (
    <header className="header" style={{ background: headerGradient }}>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo">
            <FaChartLine className="logo-icon" />
            <span className="logo-text">Sorting Visualizer</span>
          </Link>
        </div>
        <div className="menu-container">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            onTouchStart={toggleMenu} // Add onTouchStart
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="menu-icon-wrapper">
              {isMenuOpen ? (
                <FaTimes className="menu-icon close-icon" />
              ) : (
                <FaBars className="menu-icon bars-icon" />
              )}
            </div>
          </button>
          <nav className={`menu-nav ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                  <FaHome /> Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/sorting-visualizer" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                  <FaChartLine /> Visualizer
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                  <FaInfoCircle /> About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;