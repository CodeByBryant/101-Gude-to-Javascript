// Default parameters to avoid undefined checks

function greet(name = "stranger") {
  return `Hello, ${name}`;
}

console.log(greet());       // Hello, stranger
console.log(greet("Bryant")); // Hello, Bryant
