// Logical operator = combine or manipulate boolean values

// AND = &&
// OR = ||
// NOT = !

const temp = 20;

// wrong code:

if(temp > 0){
    console.log("The weather is good.");
}
else if(temp <= 30){
    console.log("The weather is good.");
}
else{
    console.log("The weather is bad.");
}

// right code:
// two conditions have to be true
if(temp > 0 && temp <= 30){
    console.log("The weather is good.");
}
else{
    console.log("The weather is bad.");
}


// code with OR:
// at least one of the two conditions has to be true
if(temp <= 0 || temp > 30){
    console.log("The weather is bad.");
}
else{
    console.log("The weather is good.");
}


// code with NOT:
// ! works changing boolean state

const isSunny = true;

if(!isSunny){
    console.log("It is cloudy.");
}
else{
    console.log("It is sunny.");
}