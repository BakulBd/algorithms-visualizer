import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SortingVisualizerPage from "./pages/SortingVisualizerPage";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

/**
 * App.js
 * Main application component that sets up routing and layout.
 */

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sorting-visualizer" element={<SortingVisualizerPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;