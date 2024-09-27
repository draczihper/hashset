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

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    add(key) {
        if (this.size >= this.buckets * this.loadFactor) {
            this.resize() // Resize our hash set as elements increase
        }

        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = new Node(key);
            this.size++;
            return true;
        } else {
            let current = this.buckets[index];
            while (current) {
                if (current.key === key) {
                    return false; // key already exists
                }
                if (!current.next) {
                    current.next = new Node(key);
                    this.size++;
                    return true;
                }
                current = current.next;
            }
        }

    }

}