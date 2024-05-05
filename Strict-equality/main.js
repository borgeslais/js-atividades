// = assignment operator
// == comparison operator (compare if values are equal)
// === stict equality operator (compare if values and dataype are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14; // number type

if(PI == "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
} // returns true

// Diference between strict and comparison operators

if(PI === "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
} // returns false, because number is not a string