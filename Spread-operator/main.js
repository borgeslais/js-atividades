// Spread operator = ...
// Allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)

// Shows the highest number
let numbers = [1, 2, 3, 4, 5];
let maxinum = Math.max(...numbers);
let mininum = Math.min(...numbers);

console.log(maximum);
console.log(mininum);

// Shows each letter of string
let username = "Lais Borges";
let letters = [...username];
console.log(letters);

// Adds a dash between each character
let username = "Lais Borges";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables]; // Combines all of the elements of the two arrays
console.log(foods);

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // Combines all of the elements of the two arrays + extras
console.log(foods);