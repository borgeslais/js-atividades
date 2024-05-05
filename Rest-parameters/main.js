// Rest parameters = (...rest)
// Allow a function work with a variable number of arguments by bundling them into an array
// Spread = expands an array into separate elements
// Rest = bundles separate elements into an array = oposite of spread operator

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "macaron";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);

// Could separate them into individual elements:
function openFridge(...foods){
    console.log(...foods);
}

// -------------
function getFood(...foods){
    return foods;
}
const foods = getFood(food1, food2, food3, food4);
console.log(foods);

// ---------------
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// In this example, the sum function takes any number of arguments and calculates their sum. The ...numbers syntax in the parameter list collects all the arguments into an array called numbers. So, no matter how many arguments you pass to sum, they will all be stored in the numbers array within the function.

// Calculating average:

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total); // Gives average of the values above

// Combining strings
function combineStrings(...strings){
    return strings.join(" "); // join() method is used to join all elements of an array into a string
}
const fullName = combineString("Mr.", "Spongebob", "Squarepants");
console.log(fullName);