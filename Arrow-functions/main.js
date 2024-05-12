// Arrow function = a concise way to write function expressions 
// Good way for simple functions that you only use once
// Parameter => some code


const hello = (name) => {console.log(`Hello ${name}`)
                        console.log("You are old")};
hello("Bro");

// ----------

const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello("Bro", 25);

// Function declaration:

setTimeout(callback, 3000);

function hello(){
    console.log("Hello!");
}

// Function expression:

setTimeout(function (){
    console.log("Hello!");
}, 3000);

// Arrow function:

setTimeout( () => console.log("Hello!"), 3000);



// Another example:

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);