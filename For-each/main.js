// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
// array.forEach(callback)
// element, index, array are provided

// This will display numbers individually on console.log

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(display);

// This will double the numbers 

function double(element, index, array){
    array[index] = element * 2;
}

// This will triple the numbers

function double(element, index, array){
    array[index] = element * 3;
}

// This will square the numbers

function double(element, index, array){
    array[index] = Math.pow(element, 2);
}


function display(element){
    console.log(element);
}


// Another example

let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(capitalize);
fruits.forEach(lowerCase);
fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

// To uppercase only the first letter of each element

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}