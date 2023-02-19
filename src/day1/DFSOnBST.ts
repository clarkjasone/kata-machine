function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }

  if (curr.value === needle) {
    return true;
  }

  if (curr.value < needle) {
    return search(curr.right, needle);
  }
  return search(curr.left, needle);
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

// *********************************
// Implement DF-find, insert, and delete based on prior whiteboarding
