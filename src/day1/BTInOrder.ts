function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // pre

  // recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  
  // post
  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

// NOTE: Depth First Search (DFS) preserves the shape of the data structure
// In this case the path will match the shape of the structure and search method when returned