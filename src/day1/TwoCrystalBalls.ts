// Given two crystal balls that will break if dropped from a high enough distance, determine the exact spot in which it will break in the most optimized way.
// This solution results in O(sqrt(N)) time complexity
// I still question whether this is really any different than O(N) since the sqrt piece is effectively a constant...but it is a different constant depending on the size of the array.

export default function two_crystal_balls(breaks: boolean[]): number {
  // define our jump interval as square root of array length
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      // if a crystal ball breaks at this index, go back to the last known safe index and traverse from there back to this index
      break;
    }
  }

  // jump back one interval (plus one since we know one interval back did not break) and traverse this portion of the array with jumps of one
  i = i - jump + 1;

  for (; i < breaks.length; i++) {
    if (breaks[i]) {
      // if the second ball breaks at this index, return the index
      return i;
    }
  }
  // if we made it this far with no break, return -1
  return -1;
}


// NOTE: example version
// I think my second for loop is cleaner without using j, but interesting that you can have two+ variables increment in a for loop
// Also check what's the significance of ++i vs. i++ in this particular case
// export default function two_crystal_balls(breaks: boolean[]): number {
//   const jump = Math.floor(Math.sqrt(breaks.length));

//   let i = jump;
//   for (; i < breaks.length; i += jump) {
//     if (breaks[i]) {
//       break;
//     }
//   }

//   i -= jump;

//   for (let j = 0; j < jump && i < breaks.length; ++j, ++i) {
//     if (breaks[i]) {
//       return i;
//     }
//   }
//   return -1;
// }