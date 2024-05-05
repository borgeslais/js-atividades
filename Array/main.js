// Array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

console.log(fruits); // Prints all elements
console.log(fruits[0]); // Prints apple

fruits[0] = "coconut"; // Changes the value of index 0 to coconut

fruits.push("coconut"); // Adds a new element in the end of the array
fruits.pop(); // Exclude the last element of the array
fruits.unshift("mango") // Adds a new element in the begginning of the array
fruits.shift(); // Exclude the first element of the array

letnumOfFruits = fruits.length;
console.log(numOfFruits); // Prints length of the array: 3.

let index = fuits.indexOf("apple");
console.log(index); // Prints index of the parameter: 0.

// Searching parameter that doesn't exist will return value -1.
// Helpful in IF statement.

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// another version:

for(let fruit of fruits){
    console.log(fruit);
}

// To sort in alphabetical order
fruits.sort();

// To sort in reverse alphabetical order
fruits.sort().reverse();