// String methods = allow you to manipulate and work with text (strings)

let userName = "laisBorges";

 // get the first character of a string:
console.log(userName.charAt(0));

// find the first index (number) of a letter:
console.log(userName.indexOf("s"));

console.log(userName.lastIndexOf("s"));

// find length of characters of a string:
console.log(userName.length);

// trim whitespaces
let newUserName = "laisBorges    ";
newUserName = newUserName.trim();
console.log(newUserName);

// make all uppercase 
newUserName = newUserName.toUpperCase();
// make all lowercase
newUserName = newUserName.toLowerCase();

// repeat a string
newUserName = newUserName.repeat(3);

// check if string starts with a certain letter
let result = newUserName.startsWith(" ");
console.log(result); // returns boolean

// check if string starts with a certain letter
let result = newUserName.endsWith(" ");
console.log(result); // returns boolean

// check if string include something 
let result = newUserName.includes(" ");
console.log(result);

// replace letters
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

// fill start of the string with chosen number or letter til is long enough like the specification
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber); // 000123-456-7890

// fill start of the string with chosen number or letter til is long enough like the specification
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber); // 123-456-7890000


