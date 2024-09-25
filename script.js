class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class HashSet {
    constructor(initialCapacity = 1) {
        this.buckets = new Array(initialCapacity);
        this.loadFactor = 0.75;
        this.size = 0;
    }
}