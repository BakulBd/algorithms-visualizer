// src/components/Home.js

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaListAlt, FaCode } from "react-icons/fa";
import {
  MdSpeed,
  MdAnimation,
  MdTimeline,
  MdQuestionAnswer,
  MdPlayArrow,
} from "react-icons/md";
import { Helmet } from "react-helmet";
import "./Home.css";

const sortingFeatures = [
  {
    icon: <FaListAlt className="feature-icon" />,
    title: "Multiple Algorithms",
    desc: "Supports a variety of sorting algorithms.",
    backgroundColor: "#64b5f6", // Added backgroundColor
  },
  {
    icon: <MdAnimation className="feature-icon" />,
    title: "Interactive Visualization",
    desc: "Real‐time array element changes.",
    backgroundColor: "#81c784", // Added backgroundColor
  },
  {
    icon: <MdSpeed className="feature-icon" />,
    title: "Speed Control",
    desc: "Adjust sorting speed for better understanding.",
    backgroundColor: "#ffb74d", // Added backgroundColor
  },
  {
    icon: <FaCode className="feature-icon" />,
    title: "Code Snippets",
    desc: "View implementation side by side.",
    backgroundColor: "#ba68c8", // Added backgroundColor
  },
];

const huffmanFeatures = [
  {
    icon: <FaCode className="feature-icon" />,
    title: "Tree Construction",
    desc: "Build a Huffman tree from character frequencies.",
    backgroundColor: "#f06292", // Added backgroundColor
  },
  {
    icon: <MdTimeline className="feature-icon" />,
    title: "Edge Weights",
    desc: "Visualize 0/1 prefix assignments.",
    backgroundColor: "#4dd0e1", // Added backgroundColor
  },
  {
    icon: <MdQuestionAnswer className="feature-icon" />,
    title: "Step‑by‑Step",
    desc: "See each merge operation in action.",
    backgroundColor: "#a1887f", // Added backgroundColor
  },
  {
    icon: <MdPlayArrow className="feature-icon" />,
    title: "Live Demo",
    desc: "Encode & decode custom text interactively.",
    backgroundColor: "#9575cd", // Added backgroundColor
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [heroColor, setHeroColor] = useState(getRandomColor());
  const heroRef = useRef();

  useEffect(() => {
    heroRef.current?.classList.add("hero-title-animated");
    const iv = setInterval(() => setHeroColor(getRandomColor()), 10000);
    return () => clearInterval(iv);
  }, []);

  function getRandomColor() {
    const colors = ["#ff6b6b", "#4ecdc4", "#ffc75f", "#8e44ad", "#3498db", "#2ecc71"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function adjustBrightness(color, pct) {
    let r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16);
    r = Math.min(255, Math.max(0, (r * (100 + pct)) / 100));
    g = Math.min(255, Math.max(0, (g * (100 + pct)) / 100));
    b = Math.min(255, Math.max(0, (b * (100 + pct)) / 100));
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
    );
  }

  return (
    <>
      <Helmet>
        <title>Home - Algorithms Visualizer</title>
        <meta name="description" content="Explore sorting algorithms and Huffman encoding with interactive visualizations." />
        <meta name="keywords" content="Sorting Visualizer, Huffman Encoding, Algorithms, Data Structures, Educational Tool" />
      </Helmet>
      <div className="home-container">
        {/* Sorting Visualizer Banner */}
        <header
          className="hero-section"
          style={{
            background: `linear-gradient(to right, ${heroColor}, ${adjustBrightness(
              heroColor,
              80
            )})`,
          }}
        >
          <div className="hero-content">
            <h1 ref={heroRef} className="hero-title">
              Sorting Visualizer
            </h1>
            <p className="hero-description">
              Visualize sorting algorithms with interactive animations and learn how they work.
            </p>
            <button className="explore-btn" onClick={() => navigate("/sorting-visualizer")}>
              <FaPlayCircle /> Start Visualizing
            </button>
          </div>
        </header>

        {/* Huffman Encoding Banner */}
        <header
          className="hero-section huffman-hero"
          style={{
            background: `linear-gradient(135deg, #8e44ad, #3498db)`,
          }}
        >
          <div className="hero-content">
            <h1 className="hero-title">Huffman Encoding</h1>
            <p className="hero-description">
              Build and traverse your own Huffman tree step by step.
            </p>
            <button className="explore-btn" onClick={() => navigate("/huffman-visualizer")}>
              <FaPlayCircle /> Start Visualizing
            </button>
          </div>
        </header>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">About This Project</h2>
          <p className="section-description">
            Algorithms Visualizer is a React app that helps you understand core algorithms—
            from sorting to Huffman encoding—through interactive, step‑by‑step animations.
          </p>
        </section>

        {/* Sorting Features */}
        <section className="features-section">
          <h2 className="section-title">Sorting Algorithms</h2>
          <div className="features-grid">
            {sortingFeatures.map((f, i) => (
              <div key={i} className="feature-card" style={{ backgroundColor: f.backgroundColor }}>
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Huffman Features */}
        <section className="features-section">
          <h2 className="section-title">Huffman Encoding</h2>
          <div className="features-grid">
            {huffmanFeatures.map((f, i) => (
              <div key={i} className="feature-card" style={{ backgroundColor: f.backgroundColor }}>
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}