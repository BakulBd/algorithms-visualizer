
const MergeSortLogic = (array, speed, setArray, setComparisonCount, setSwapCount, abortSignal, setMergeIndices) => {
    let comparisons = 0;
    let swaps = 0;

    const merge = async (arr, l, m, r) => {
        if (abortSignal && abortSignal.aborted) return;
        const n1 = m - l + 1;
        const n2 = r - m;

        const L = new Array(n1);
        const R = new Array(n2);

        for (let i = 0; i < n1; i++) L[i] = arr[l + i];
        for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

        let i = 0;
        let j = 0;
        let k = l;

        while (i < n1 && j < n2) {
            if (abortSignal && abortSignal.aborted) return;
            comparisons++;
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            swaps++;
            setArray([...arr]);
            setMergeIndices([l, m, k]); // Visualize merge
            k++;
            await new Promise((resolve) => setTimeout(resolve, speed));
        }

        while (i < n1) {
            if (abortSignal && abortSignal.aborted) return;
            arr[k] = L[i];
            swaps++;
            setArray([...arr]);
            setMergeIndices([l, m, k]); // Visualize merge
            i++;
            k++;
            await new Promise((resolve) => setTimeout(resolve, speed));
        }

        while (j < n2) {
            if (abortSignal && abortSignal.aborted) return;
            arr[k] = R[j];
            swaps++;
            setArray([...arr]);
            setMergeIndices([l, m, k]); // Visualize merge
            j++;
            k++;
            await new Promise((resolve) => setTimeout(resolve, speed));
        }
        setMergeIndices([]); // Clear indices
    };

    const mergeSort = async (arr, l, r) => {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            await mergeSort(arr, l, m);
            await mergeSort(arr, m + 1, r);
            await merge(arr, l, m, r);
        }
    };

    const start = async () => {
        await mergeSort([...array], 0, array.length - 1);
        setComparisonCount(comparisons);
        setSwapCount(swaps);
    };

    return {
        start,
        comparisons,
        swaps,
    };
};

const MergeSort = (array, setArray, setIsSorting, speed, setMergeIndices, setComparisonCount, setSwapCount, abortController) => {
    const { start, comparisons, swaps } = MergeSortLogic(array, speed, setArray, setComparisonCount, setSwapCount, abortController.current.signal, setMergeIndices);

    const run = async () => {
        await start();
        setIsSorting(false);
    };

    run();

    return {
        abort: () => {
            abortController.current.abort();
            setIsSorting(false);
            setComparisonCount(comparisons);
            setSwapCount(swaps);
            setMergeIndices([]); // Clear indices on abort
        },
    };
};

export default MergeSort;