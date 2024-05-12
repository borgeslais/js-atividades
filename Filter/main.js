// .filter() = creates a new array by filtering out elements

let number = [1, 2, 3, 4, 5];
let evenNums = number.filter(isEven);
let oddNums = number.filter(isOdd);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

// Another example


const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(children);
console.log(adults);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

// Another example

const words = [banana, apple, kiwi, coconut, papaya, pomegranate];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);
console.log(shortWords);

function getShortWords(element){
    return element.length < 6;
}

function getLongWords(element){
    return element.length > 6;
}