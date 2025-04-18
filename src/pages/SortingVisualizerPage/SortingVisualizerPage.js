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
            </Helmet>
            <div>
                <h1>Sorting Visualizer</h1>
                <SortingVisualizer />
            </div>
        </>
    );
};

export default SortingVisualizerPage;