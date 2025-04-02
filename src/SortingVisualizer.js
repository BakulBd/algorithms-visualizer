import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaPlayCircle, FaStopCircle, FaRandom, FaInfoCircle } from "react-icons/fa";
import './SortingVisualizer.css';
import BubbleSort from "./components/BubbleSort";
import InsertionSort from "./components/InsertionSort";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";
import SelectionSort from "./components/SelectionSort";
import CountingSort from "./components/CountingSort";

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(10);
    const [isSorting, setIsSorting] = useState(false);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("BubbleSort");
    const [sortingSpeed, setSortingSpeed] = useState(100);
    const [isStarted, setIsStarted] = useState(false);
    const [algorithmInfo, setAlgorithmInfo] = useState("");
    const [mergeIndices, setMergeIndices] = useState([]); // Fix: Initialize mergeIndices state
    const abortController = useRef(new AbortController());

    const sortingRef = useRef(null);

    const generateArray = useCallback(() => {
        const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 5);
        setArray(newArray);
    }, [arraySize]);

    useEffect(() => {
        generateArray();
        setAlgorithmInfo(getAlgorithmInfo(sortingAlgorithm)); // Add this line
    }, [generateArray, sortingAlgorithm]); // Add sortingAlgorithm as a dependency

    const startSorting = useCallback(() => {
        if (!isSorting) {
            setIsSorting(true);
            setIsStarted(true);
            setAlgorithmInfo(getAlgorithmInfo(sortingAlgorithm));
            const algorithmMap = {
                BubbleSort: BubbleSort,
                InsertionSort: InsertionSort,
                QuickSort: QuickSort,
                MergeSort: (arr, setArr, setIsSort, speed, abort) =>
                    MergeSort(arr, setArr, setIsSort, speed, setMergeIndices, abort), // Pass setMergeIndices
                SelectionSort: SelectionSort,
                CountingSort: CountingSort,
            };
            sortingRef.current = algorithmMap[sortingAlgorithm](
                array,
                setArray,
                setIsSorting,
                sortingSpeed,
                abortController
            );
        }
    }, [array, sortingAlgorithm, sortingSpeed, isSorting, setMergeIndices]);

    const stopSorting = useCallback(() => {
        if (isSorting) {
            setIsSorting(false);
            setIsStarted(false);
            if (sortingRef.current && sortingRef.current.abort) {
                sortingRef.current.abort();
                sortingRef.current = null;
                abortController.current = new AbortController();
            }
            generateArray();
        }
    }, [generateArray, isSorting]);

    const handleArraySizeChange = useCallback((e) => {
        const newSize = Math.min(100, Math.max(5, Number(e.target.value)));
        setArraySize(newSize);
    }, []);

    const getAlgorithmInfo = (algorithm) => {
        const info = {
            BubbleSort: "Compares adjacent elements.",
            InsertionSort: "Builds sorted array one by one.",
            QuickSort: "Uses a 'pivot' for sorting.",
            MergeSort: "Divides, sorts, and merges.",
            SelectionSort: "Finds minimum, places at start.",
            CountingSort: "Counts occurrences for sorting.",
        };
        return info[algorithm] || "";
    };

    return (
        <div className="visualizer-container">
            <h1 className="title">Sorting Visualizer</h1>
            <div className="controls">
                <div className="menu-item">
                    <input
                        type="number"
                        value={arraySize}
                        onChange={handleArraySizeChange}
                        disabled={isSorting}
                        min="5"
                        max="100"
                        className="input-size"
                        aria-label="Array Size"
                    />
                    <button onClick={generateArray} disabled={isSorting} className="generate-btn" aria-label="Generate New Array">
                        <FaRandom /> New Array
                    </button>
                </div>
                <div className="menu-item">
                    <label htmlFor="algorithm" className="algorithm-label">Algorithm:</label>
                    <select
                        id="algorithm"
                        value={sortingAlgorithm}
                        onChange={(e) => setSortingAlgorithm(e.target.value)}
                        disabled={isSorting}
                        className="algorithm-select"
                        aria-label="Sorting Algorithm"
                    >
                        <option value="BubbleSort">Bubble Sort</option>
                        <option value="InsertionSort">Insertion Sort</option>
                        <option value="QuickSort">Quick Sort</option>
                        <option value="MergeSort">Merge Sort</option>
                        <option value="SelectionSort">Selection Sort</option>
                        <option value="CountingSort">Counting Sort</option>
                    </select>
                </div>
                <div className="menu-item">
                    <label htmlFor="speed" className="speed-label">Speed:</label>
                    <select
                        id="speed"
                        value={sortingSpeed}
                        onChange={(e) => setSortingSpeed(Number(e.target.value))}
                        disabled={isSorting}
                        className="speed-select"
                        aria-label="Sorting Speed"
                    >
                        <option value={100}>Fast</option>
                        <option value={200}>Medium</option>
                        <option value={500}>Slow</option>
                        <option value={1000}>Very Slow</option>
                    </select>
                </div>
                <div className="controls-btns">
                    <button
                        className="start-btn"
                        onClick={startSorting}
                        disabled={isStarted && isSorting}
                        aria-label="Start Sorting"
                    >
                        <FaPlayCircle
                            style={{ color: isSorting ? "white" : "#2979ff", fontSize: "1.8em" }}
                        />
                        <span className="button-text">Start</span>
                    </button>
                    <button
                        className="stop-btn"
                        onClick={stopSorting}
                        disabled={!isSorting && !isStarted}
                        aria-label="Stop Sorting"
                    >
                        <FaStopCircle
                            style={{ color: isSorting && isStarted ? "#d50000" : "#2979ff", fontSize: "1.8em" }}
                        />
                        <span className="button-text">Stop</span>
                    </button>
                </div>
            </div>

            <div className="bars-container" style={{ '--bar-count': arraySize }}>
                {array.map((value, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{
                            height: `${value * 3}px`,
                            backgroundColor: mergeIndices.includes(index) ? "#e74c3c" : `hsl(${(index / array.length) * 360}, 100%, 50%)`, // Highlight merge indices
                        }}
                    >
                        <span className="bar-value">{value}</span>
                    </div>
                ))}
            </div>

            <div className="array-info">
                <div className="array-elements">
                    {array.map((value, index) => (
                        <span key={index} className="array-element">
                            {value}
                        </span>
                    ))}
                </div>
                <p><strong>Algorithm:</strong> {sortingAlgorithm} <FaInfoCircle onClick={() => alert(algorithmInfo)} style={{ cursor: 'pointer' }} /></p>
                {algorithmInfo && <p className="algorithm-description">{algorithmInfo}</p>}
            </div>
        </div>
    );
};

export default SortingVisualizer;