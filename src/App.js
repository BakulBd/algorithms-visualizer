import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import SortingVisualizerPage from "./pages/SortingVisualizerPage";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Header /> {/* Header will be rendered on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting-visualizer" element={<SortingVisualizerPage />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
