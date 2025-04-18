// src/pages/SortingVisualizerPage.js
import React from "react";
import { Helmet } from "react-helmet";
import SortingVisualizer from "../../SortingVisualizer"; // Corrected import path

const SortingVisualizerPage = () => {
    return (
        <>
            <Helmet>
                <title>Sorting Visualizer - Algorithms Visualizer</title>
                <meta name="description" content="Visualize sorting algorithms with interactive animations." />
                <meta name="keywords" content="Sorting Visualizer, Algorithms, Educational Tool, Interactive Animations" />
                <meta property="og:title" content="Sorting Visualizer - Algorithms Visualizer" />
                <meta property="og:description" content="Visualize sorting algorithms with interactive animations." />
                <meta property="og:image" content="/og-thumbnail.jpg" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sorting Visualizer - Algorithms Visualizer" />
                <meta name="twitter:description" content="Visualize sorting algorithms with interactive animations." />
                <meta name="twitter:image" content="/twitter-thumbnail.jpg" />
            </Helmet>
            <div>
                <h1>Sorting Visualizer</h1>
                <SortingVisualizer />
            </div>
        </>
    );
};

export default SortingVisualizerPage;