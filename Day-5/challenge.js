// Day 05 — Chunk Array

function chunkArray(arr, size) {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunks.push(chunk);
  }

  return chunks;
}

// Test cases
console.log(chunkArray([1, 2, 3, 4, 5], 2));    // [[1,2], [3,4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // [[1,2,3], [4,5,6]]
console.log(chunkArray(["a","b","c","d"], 1));  // [["a"],["b"],["c"],["d"]]
