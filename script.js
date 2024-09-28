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

    has(key) {
        const index = this.hash(key);
        let current = this.buckets[index];

        while (current) {
         if (current.key === key) {
                return true;
            }
            current = current.next
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key)
        let current = this.buckets[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.buckets[index] = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    resize() {
        const newCapacity = this.buckets.length * 2;
        const newBuckets = new Array(newCapacity);

        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];
            while (current) {
                const newIndex = this.hash(current.key) % newCapacity;
                if (!newBuckets[newIndex]) {
                    newBuckets[newIndex] = new Node(current.key);
                } else {
                    let newCurrent = newBuckets[newIndex];
                    while (newCurrent.next) {
                        newCurrent = newCurrent.next;
                    }
                    newCurrent.next = new Node(current.key);
                }
                current = current.next;
            }
        }
        this.buckets = newBuckets;
    }
}