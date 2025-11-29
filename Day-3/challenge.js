// Day 03 — Palindrome Checker

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("121"));     // true
