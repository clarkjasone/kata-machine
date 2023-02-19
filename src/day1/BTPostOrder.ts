function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // pre

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);
  
  // post
  path.push(curr.value);
  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

// NOTE: Depth First Search (DFS) preserves the shape of the data structure
// In this case the path will match the shape of the structure and search method when returned