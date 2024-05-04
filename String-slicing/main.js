// string slicing = creating a substring from a portion of another string
// won't alter the original string
// string.slice(start, end)

const fullName = "Lais Borges";

let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(5, 11) // doesn't necessarily needs end index in this case

// end index is exclusive
console.log(firstName);
console.log(lastName);

// first and last character
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

// more intelligent type of displaying first and last name:
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);