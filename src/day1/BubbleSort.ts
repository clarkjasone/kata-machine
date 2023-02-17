// Implement an array sorting algorithm where the largest number "bubbles" to the largest available array index on each iteration.

// Use this trick for adding a sequence of numbers: 
// Sum = ((n + 1) * n) / 2
// Ex: 1..100=101; 2..99=101...50..51=101
//     101 * 50 = 5050
//     (n + 1) * n/2
export default function bubble_sort(arr: number[]): void {
  // traverse the entire array
  for (let i = 0; i < arr.length; ++i) {
    // on each iteration, traverse the array up to it's length minus the outer loop's index thereby shortening the search boundary on each iteration
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      // compare the current index with the next and swap if needed
      // the largest element will bubble to the largest index on each iteration
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}