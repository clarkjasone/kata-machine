export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }

    // search
    if (curr.value === needle) {
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  return false;
}

// NOTE: Breadth First Search (BFS) does NOT preserve the shape of the data structure.
// This can be a problem if used to compare data structures with different shapes, but similar values and organization