// A(h)->B->C->D(t)

type Node<T> = {
  value: T, 
  next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
      this.head = this.tail = undefined;
      this.length = 0;
    }

    enqueue(item: T): void {
      const node = {value: item} as Node<T>;

      this.length++;  
      if (!this.tail) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;  
      }
      return;
    }

    deque(): T | undefined {
      if (!this.head) {
        return undefined;        
      } else {
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined; // technically unnecessary since JavaScript will garbage collect head since this.head has been updated
        this.length--;

        if (!this.length) {
          this.head = this.tail = undefined;
        }
        
        return head.value;
      }

    }
    peek(): T | undefined {
      return this.head?.value;
    }
}