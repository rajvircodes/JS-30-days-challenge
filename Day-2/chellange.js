// Day 02 — Reverse a String

function reverseString(str) {
  // Method: Convert to array → reverse → join
  return str.split("").reverse().join("");
}

// Test cases
console.log(reverseString("hello"));       // "olleh"
console.log(reverseString("JavaScript"));  // "tpircSavaJ"
console.log(reverseString("racecar"));     // "racecar"
