// Ternary operator = a shortcut to if { } and else { } statements
// ? code if true : code if false

let age = 21;
let message = age >= 18 ? "You're and adult" : "You're a minor";

// alternative to writing:

if (age >=18) {
    message = "You're an adult";
}
else {
    message = "You're a minor";
}

// example with boolean:

let isStudent = true;
let message2 = isStudent ? "You're a student" : "You're NOT a student";
console.log(message);

// example with number:

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);