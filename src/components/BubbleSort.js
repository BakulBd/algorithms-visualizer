// Example: BubbleSort.js

const BubbleSort = (array, setArray, setIsSorting, sortingSpeed, abortSignal) => {
  let arr = [...array]; // Clone the array
  const length = arr.length;
  let i = 0;
  let j = 0;
  let timeoutId; // Store the timeout ID

  // Bubble sort algorithm with async/await for delay
  const runBubbleSort = () => {
      if (abortSignal && abortSignal.aborted) {
          setIsSorting(false); // Stop sorting
          return;
      }

      if (i < length) {
          if (j < length - i - 1) {
              if (arr[j] > arr[j + 1]) {
                  // Swap elements
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                  setArray([...arr]); // Update the array state
              }
              j++;
          } else {
              j = 0;
              i++;
          }
          timeoutId = setTimeout(runBubbleSort, sortingSpeed); // Schedule next step
      } else {
          setIsSorting(false); // Sorting finished
      }
  };

  runBubbleSort();

  // Abort function to clear the timeout and stop sorting
  const abort = () => {
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      setIsSorting(false);
  };

  return {
      abort: abort,
  };
};

// Export BubbleSort function
export default BubbleSort;