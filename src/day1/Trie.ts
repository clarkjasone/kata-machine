export default class Trie {
    
    constructor() {
    }

    insert(item: string): void {

    }
    delete(item: string): void {

    }
    find(partial: string): string[] {

    }
}


// example character code index function
const zero = "a".charCodeAt(0);
console.log(zero);

function idx(str) { return str.charCodeAt(0) - zero}

console.log(idx("c"));