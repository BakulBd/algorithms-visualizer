import React from 'react';
import { Helmet } from "react-helmet";
import HuffmanVisualizer from '../../components/HuffmanVisualizer/HuffmanVisualizer';
import './HuffmanVisualizerPage.css';

const HuffmanVisualizerPage = () => {
  return (
    <>
      <Helmet>
        <title>Huffman Visualizer - Algorithms Visualizer</title>
        <meta name="description" content="Visualize Huffman encoding with step-by-step animations." />
        <meta name="keywords" content="Huffman Visualizer, Huffman Encoding, Algorithms, Data Compression" />
      </Helmet>
      <div className="huffman-visualizer-page">
        <header className="page-header">
          <h1>Huffman Encoding Visualizer</h1>
          <p>Visualize the process of Huffman Encoding with interactive animations and detailed explanations.</p>
        </header>
        <main>
          <HuffmanVisualizer />
        </main>
      </div>
    </>
  );
};

export default HuffmanVisualizerPage;