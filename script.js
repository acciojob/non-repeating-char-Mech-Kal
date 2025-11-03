/**
 * Finds the first non-repeated character in a string.
 *
 * @param {string} str The input string (lowercase English letters).
 * @returns {string | null} The first non-repeated character, or null if none exists.
 */
function firstNonRepeatedChar(str) {
  // Edge case: handle empty or null input string
  if (!str || str.length === 0) {
    return null;
  }

  // 1. Create a frequency map (Hash Map)
  // This first pass takes O(n) time to count all characters.
  const charCount = {};
  
  for (const char of str) {
    // Use the OR operator for a concise way to initialize or increment the count
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 2. Iterate through the string again in order
  // This second pass also takes O(n) time.
  for (const char of str) {
    // Check the count from the map
    if (charCount[char] === 1) {
      // The first character encountered with a count of 1 is the answer
      return char;
    }
  }

  // 3. If the loop completes, all characters were repeated
  return null;
}

// --- Examples for testing ---

// Example 1: 'c' is the first non-repeated character
console.log(`'aabbcdd' -> ${firstNonRepeatedChar('aabbcdd')}`); // Expected: 'c'

// Example 2: All characters are repeated
console.log(`'aabbcc' -> ${firstNonRepeatedChar('aabbcc')}`);   // Expected: null

// Example 3: Non-repeated character at the start
console.log(`'zaabbcdd' -> ${firstNonRepeatedChar('zaabbcdd')}`); // Expected: 'z'

// Example 4: Single character string
console.log(`'x' -> ${firstNonRepeatedChar('x')}`);           // Expected: 'x'

// Example 5: Empty string
console.log(`'' -> ${firstNonRepeatedChar('')}`);            // Expected: null

// --- User Interaction (as per prompt) ---
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));