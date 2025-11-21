// Tip #22: String Methods
// Title: String Analysis with startsWith, endsWith, includes
//
// Explanation:
// Modern string methods make it easy to check string content without regex.
// startsWith() checks if a string begins with specified characters.
// endsWith() checks if a string ends with specified characters.
// includes() checks if a string contains a substring anywhere.
// All methods are case-sensitive and more readable than indexOf or regex.
//
// Example:

"use strict";

const sentence = "JavaScript is awesome!";

// Check how string starts, ends, or what it contains
console.log(sentence.startsWith("Java")); // Output: true
console.log(sentence.endsWith("!"));      // Output: true
console.log(sentence.includes("is"));     // Output: true

// All methods support optional position parameter
console.log(sentence.startsWith("Script", 4)); // Output: true (checks from index 4)
console.log(sentence.endsWith("awesome", 20)); // Output: true (treats string as if length is 20)

// Case sensitivity
console.log(sentence.includes("javascript")); // Output: false (case-sensitive)
console.log(sentence.toLowerCase().includes("javascript")); // Output: true

// Practical example: file validation
function isImageFile(filename) {
  return filename.endsWith(".jpg") || 
         filename.endsWith(".png") || 
         filename.endsWith(".gif");
}
console.log(isImageFile("photo.jpg")); // Output: true
console.log(isImageFile("document.pdf")); // Output: false
