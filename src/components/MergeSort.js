/**
 * MergeSort.js
 * Implements the Merge Sort algorithm with visualization support.
 * Updates the array and merge indices for visualization.
 */

const MergeSortLogic = (array, speed, setArray, abortSignal, setMergeIndices) => {
    const merge = async (arr, l, m, r) => {
        if (abortSignal && abortSignal.aborted) return;

        const left = arr.slice(l, m + 1);
        const right = arr.slice(m + 1, r + 1);

        let i = 0, j = 0, k = l;

        // Merge the two halves
        while (i < left.length && j < right.length) {
            if (abortSignal && abortSignal.aborted) return;

            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
            setArray([...arr]);
            setMergeIndices([l, m, r]); // Highlight merge indices
            await new Promise(resolve => setTimeout(resolve, speed));
        }

        // Copy remaining elements from left
        while (i < left.length) {
            if (abortSignal && abortSignal.aborted) return;
            arr[k++] = left[i++];
            setArray([...arr]);
            setMergeIndices([l, m, r]);
            await new Promise(resolve => setTimeout(resolve, speed));
        }

        // Copy remaining elements from right
        while (j < right.length) {
            if (abortSignal && abortSignal.aborted) return;
            arr[k++] = right[j++];
            setArray([...arr]);
            setMergeIndices([l, m, r]);
            await new Promise(resolve => setTimeout(resolve, speed));
        }

        setMergeIndices([]); // Clear indices after merging
    };

    const mergeSort = async (arr, l, r) => {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            await mergeSort(arr, l, m);
            await mergeSort(arr, m + 1, r);
            await merge(arr, l, m, r);
        }
    };

    return async () => {
        await mergeSort([...array], 0, array.length - 1);
    };
};

const MergeSort = (array, setArray, setIsSorting, speed, setMergeIndices, abortController) => {
    const run = MergeSortLogic(array, speed, setArray, abortController.current.signal, setMergeIndices);

    run()
        .then(() => {
            setIsSorting(false);
            setMergeIndices([]); // Ensure indices are cleared after sorting
        })
        .catch(() => {
            setIsSorting(false);
            setMergeIndices([]);
        });

    return {
        abort: () => {
            abortController.current.abort();
            setIsSorting(false);
            setMergeIndices([]);
        },
    };
};

export default MergeSort;