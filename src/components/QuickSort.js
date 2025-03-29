const QuickSort = (array, setArray, setIsSorting, sortingSpeed, abortSignal) => {
  const quickSortHelper = async (arr, low, high) => {
      if (abortSignal && abortSignal.aborted) {
          return;
      }
      if (low < high) {
          let pi = await partition(arr, low, high);
          if (abortSignal && abortSignal.aborted) {
              return;
          }
          await quickSortHelper(arr, low, pi - 1);
          if (abortSignal && abortSignal.aborted) {
              return;
          }
          await quickSortHelper(arr, pi + 1, high);
      }
  };

  const partition = async (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
          if (abortSignal && abortSignal.aborted) {
              return;
          }
          if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
              setArray([...arr]);
              await new Promise(resolve => setTimeout(resolve, sortingSpeed)); // Delay
          }
      }

      if (abortSignal && abortSignal.aborted) {
          return;
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, sortingSpeed)); // Delay

      return i + 1;
  };

  const runQuickSort = async () => {
      let arr = [...array];
      await quickSortHelper(arr, 0, arr.length - 1);
      if (abortSignal && abortSignal.aborted) {
          return;
      }
      setIsSorting(false);
  };

  runQuickSort();

  return {
      abort: () => {
          setIsSorting(false);
      },
  };
};

export default QuickSort;