// Use binary search to find the value needle in the array haystack.
// The binary search technique consists of halving the array and checking the value of that index to be <=> to the value we're looking for.
// This process continues until the value is found or the array can no longer be reduced in size.
// This results in O(logN) time complexity - log is just the inverse of exponentiation so log(base2) of a number will equal the power of 2 to get that number.
// For example, if the array is 4096 elements long, it will require a maximum of 12 iterations of the BST algorithm to find the answer: 2^12 = 4096.

export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    // calculate the midpoint of the current subsection of the array
    const m = Math.floor(lo + ((hi - lo) / 2));
    const v = haystack[m];
    if (v === needle) {
      // if the value at the midpoint equals the needle, return true
      return true;
    } else if (v < needle) {
      // if the value at the midpoint is less than needle, reassign lo to the midpoint + one
      lo = m + 1;
    } else {
      // if the value at the midpoint is greater than needle, reassign hi to the midpoint
      hi = m;
    }
    // continue halving the array while lo is less than hi
  } while (lo < hi);
  // if we make it through the entire array without finding the needle, return false
  return false;
}