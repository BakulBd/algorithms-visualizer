const InsertionSort = (array, setArray, setIsSorting, sortingSpeed, abortSignal) => {
  let arr = [...array]; // Clone the array
  const length = arr.length;
  let i = 1;
  let timeoutId; // Store the timeout ID

  const runInsertionSort = () => {
      if (abortSignal && abortSignal.aborted) {
          setIsSorting(false);
          return;
      }

      if (i < length) {
          let key = arr[i];
          let j = i - 1;

          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j--;
              setArray([...arr]);
          }

          arr[j + 1] = key;
          setArray([...arr]);

          i++;
          timeoutId = setTimeout(runInsertionSort, sortingSpeed);
      } else {
          setIsSorting(false);
      }
  };

  runInsertionSort();

  return {
      abort: () => {
          if (timeoutId) {
              clearTimeout(timeoutId);
          }
          setIsSorting(false);
      },
  };
};

export default InsertionSort;