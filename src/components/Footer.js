import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter, FaCode, FaBook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-me">
          <p className="about-text">
            <strong>Bakul Ahmed</strong> | <span className="connect-text">Connect</span>
          </p>
        </div>

        <div className="footer-section contact">
          <div className="social-links">
            <a href="mailto:bokula88@gmail.com" className="social-icon" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/Bakulbd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/cyberbokul/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com/cyberbokul" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section links">
          <div className="links-group">
            <a href="/" className="footer-link">Home</a>
            <a href="/projects" className="footer-link">Projects</a>
            <a href="/about" className="footer-link">About</a>
          </div>
          <div className="links-group">
            <a href="/code" className="footer-link"><FaCode /> Code</a>
            <a href="/learn" className="footer-link"><FaBook /> Learn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Bakul Ahmed | <a href="/privacy" className="privacy-link">Privacy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;