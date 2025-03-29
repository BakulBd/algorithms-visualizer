const CountingSort = (array, setArray, setIsSorting, sortingSpeed, abortSignal) => {
  const runCountingSort = async () => {
      let arr = [...array];
      const max = Math.max(...arr);
      const count = new Array(max + 1).fill(0);

      // Count occurrences
      for (let i = 0; i < arr.length; i++) {
          if (abortSignal && abortSignal.aborted) {
              setIsSorting(false);
              return;
          }
          count[arr[i]]++;
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, sortingSpeed));
      }

      // Reconstruct the array
      let index = 0;
      for (let i = 0; i <= max; i++) {
          while (count[i] > 0) {
              if (abortSignal && abortSignal.aborted) {
                  setIsSorting(false);
                  return;
              }
              arr[index] = i;
              count[i]--;
              index++;
              setArray([...arr]);
              await new Promise(resolve => setTimeout(resolve, sortingSpeed));
          }
      }

      setIsSorting(false);
  };

  runCountingSort();

  return {
      abort: () => {
          setIsSorting(false);
      },
  };
};

export default CountingSort;