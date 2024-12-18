const HashSet = require('./script.js');

const set = new HashSet();

console.log("Initial bucket count:", set.bucketCount());

// Add elements and observe growth
console.log("\nAdding elements and observing growth:");
for (let i = 0; i < 10; i++) {
    const added = set.add('key' + i);
    console.log(`After adding key${i}: Added = ${added}, Size = ${set.size()}, Buckets = ${set.bucketCount()}, Collisions = ${set.collisions()}`);
}

// Try to add duplicate elements
console.log("\nTrying to add duplicate elements:");
console.log("Adding 'key5' again:", set.add('key5'));
console.log("Adding 'key7' again:", set.add('key7'));

// Add some elements that will likely collide
console.log("\nAdding elements that will likely collide:");
set.add('abc');
set.add('cba');  // This will likely collide with 'abc'
console.log(`After adding potentially colliding elements: Size = ${set.size()}, Buckets = ${set.bucketCount()}, Collisions = ${set.collisions()}`);

console.log("\nAll keys:", set.keys());

// Test other methods
console.log("\nTesting other methods:");
console.log("Has 'key5':", set.has('key5'));
console.log("Has 'abc':", set.has('abc'));
console.log("Has 'key15':", set.has('key15'));
console.log("Removing 'key7':", set.remove('key7'));
console.log("Has 'key7' after removal:", set.has('key7'));

// Clear the set
console.log("\nClearing the set...");
set.clear();
console.log("Size after clearing:", set.size());
console.log("Bucket count after clearing:", set.bucketCount());
console.log("Collisions after clearing:", set.collisions());
