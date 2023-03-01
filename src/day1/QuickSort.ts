// Time Complexity: O(nlogn) theoretically, but can be O(n^2) for a reverse sorted array if you pick the highest index as the pivot on each recursive call
// Go through this in more detail to clearly understand how O(nlogn) is achieved
// Add time complexity / space complexity comments to all functions in this program

function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}


function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}