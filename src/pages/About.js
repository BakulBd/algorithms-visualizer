import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaCode,
  FaReact,
  FaJs,
  FaDatabase,
  FaTerminal,
  FaUniversity,
} from "react-icons/fa"; // More icons
import { SiCplusplus, SiHtml5, SiCss3 } from "react-icons/si"; // Even more icons
import "./About.css"; // Make sure this file exists

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
        <p>
          Discover more about my journey, skills, and passion for coding.
        </p>
      </header>

      {/* Bio Section */}
      <section className="bio-section">
        <h2>
          👋 Hi, I'm Bakul Ahmed
        </h2>
        <p>
          A passionate developer and a proud CSE student at{" "}
          <FaUniversity /> Green University of Bangladesh. I have a strong
          interest in web technologies and software development. I love
          solving complex problems, creating efficient algorithms, and building
          beautiful, functional UIs.
        </p>
        <p>
          My academic journey at Green University has provided me with a solid
          foundation in computer science principles, and I'm always eager to
          apply that knowledge to real-world projects. I'm particularly fascinated
          by the intersection of theory and practice.
        </p>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>🎓 Education</h2>
        <p>
          <FaUniversity /> Green University of Bangladesh
        </p>
        <p>
          B.Sc. in Computer Science and Engineering (Ongoing)
        </p>
        <p>
          I am currently pursuing my B.Sc. in CSE, where I'm gaining knowledge in
          various areas such as data structures and algorithms, database
          management, software engineering, and web development.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>💡 Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaJs /> JavaScript & React
          </div>
          <div className="skill-card">
            <SiCplusplus /> C++ (Competitive Programming)
          </div>
          <div className="skill-card">
            <FaTerminal /> Data Structures & Algorithms
          </div>
          <div className="skill-card">
            <FaCode /> Web Development
          </div>
          <div className="skill-card">
            <FaTerminal /> Sorting & Searching Algorithms
          </div>
          <div className="skill-card">
            <FaReact /> UI/UX Design
          </div>
          <div className="skill-card">
            <SiHtml5 /> HTML5
          </div>
          <div className="skill-card">
            <SiCss3 /> CSS3
          </div>
          <div className="skill-card">
            <FaDatabase /> Databases (SQL)
          </div>
          {/* Add more skills as needed */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2> 🛠️ Projects</h2>
        <p>
          Here are some of the projects I've worked on:
        </p>
        <ul>
          <li>
            <a href="/sorting-visualizer" className="project-link">
              <FaCode /> Sorting Visualizer
            </a>{" "}
            - A web application to visualize different sorting algorithms.
          </li>
          {/* Add more projects */}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📬 Get in Touch</h2>
        <p>
          Feel free to connect with me for **collaborations, projects, or just a
          chat!**
        </p>
        <div className="contact-links">
          <a href="mailto:bokula88@gmail.com" className="contact-link">
            <FaEnvelope /> Email Me
          </a>
          <a
            href="https://github.com/Bakulbd"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub /> GitHub Profile
          </a>
          {/* Add other social links */}
        </div>
      </section>
    </div>
  );
};

export default About;