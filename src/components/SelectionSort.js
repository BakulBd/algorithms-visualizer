const SelectionSort = (array, setArray, setIsSorting, sortingSpeed, abortSignal) => {
  let arr = [...array]; // Clone the array
  const length = arr.length;
  let i = 0;
  let timeoutId; // Store the timeout ID

  const runSelectionSort = () => {
      if (abortSignal && abortSignal.aborted) {
          setIsSorting(false);
          return;
      }

      if (i < length) {
          let minIndex = i;
          for (let j = i + 1; j < length; j++) {
              if (arr[j] < arr[minIndex]) {
                  minIndex = j;
              }
          }
          if (minIndex !== i) {
              [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
              setArray([...arr]); // Update the array state
          }
          i++;
          timeoutId = setTimeout(runSelectionSort, sortingSpeed);
      } else {
          setIsSorting(false);
      }
  };

  runSelectionSort();

  return {
      abort: () => {
          if (timeoutId) {
              clearTimeout(timeoutId);
          }
          setIsSorting(false);
      },
  };
};

export default SelectionSort;