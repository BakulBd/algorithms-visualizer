import React from "react";
import { Helmet } from "react-helmet";
import "./Privacy.css"; // Corrected import path

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Algorithms Visualizer</title>
        <meta name="description" content="Read the privacy policy for Algorithms Visualizer." />
        <meta name="keywords" content="Privacy Policy, Data Protection, Algorithms Visualizer" />
        <meta property="og:title" content="Privacy Policy - Algorithms Visualizer" />
        <meta property="og:description" content="Read the privacy policy for Algorithms Visualizer." />
        <meta property="og:image" content="/og-thumbnail.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Algorithms Visualizer" />
        <meta name="twitter:description" content="Read the privacy policy for Algorithms Visualizer." />
        <meta name="twitter:image" content="/twitter-thumbnail.jpg" />
      </Helmet>
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-date">Last Updated: March 31, 2025</p>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to our Sorting Visualizer project. Your privacy is important to us, and we are committed to protecting any data you provide.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>
            This application does not collect personal data. Any usage data (e.g., interaction with sorting algorithms) is stored locally on your device and not shared with third parties.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Cookies</h2>
          <p>
            Our website may use cookies for improving user experience, but we do not store personal information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Third-Party Services</h2>
          <p>
            If external services (e.g., analytics) are used in the future, we will update this policy accordingly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Contact</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:bokula88@gmail.com">bokula88@gmail.com</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;