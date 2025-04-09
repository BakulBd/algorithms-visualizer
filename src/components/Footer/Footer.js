import React from "react";
import {
    FaGithub,
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaCode,
    FaBook,
    FaLink,
    FaHome,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about-me">
                    <h3 className="footer-title">About Me</h3>
                    <p className="about-text">
                        A passionate developer creating tools and visualizations. Connect with me!
                    </p>
                </div>
                <div className="footer-section contact">
                    <h3 className="footer-title">Connect</h3>
                    <div className="social-links">
                        <a href="mailto:bokula88@gmail.com" className="social-icon" aria-label="Email">
                            <FaEnvelope />
                        </a>
                        <a href="https://github.com/Bakulbd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/cyberbokul/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/cyberbokul" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links-list">
                        <li className="footer-links-item">
                            <a href="/" className="footer-link">
                                <FaHome className="link-icon" /> Home
                            </a>
                        </li>
                        <li className="footer-links-item">
                            <a href="/sorting-visualizer" className="footer-link">
                                <FaCode className="link-icon" /> Visualizer
                            </a>
                        </li>
                        <li className="footer-links-item">
                            <a href="/about" className="footer-link">
                                <FaBook className="link-icon" /> About
                            </a>
                        </li>
                        <li className="footer-links-item">
                            <a href="/privacy" className="footer-link">
                                <FaLink className="link-icon" /> Privacy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} - Algorithms Visualizers</p>
            </div>
        </footer>
    );
};

export default Footer;