// Function = a section of reusable code
// Declare code onse, use it whenever you want
// Call the function to execute the code



function happyBirthday(username, age){
    console.log("Happy birthday to you...");
    console.log("Happy birthday to you...");
    console.log(`Happy birthday dear ${username}`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old;`);
}

// functions need matching parameters

happyBirthday("Lais", 27);

function add(x, y){
    let result = x + y;
    return result; // to show value result
}

let answer = add(2, 3);
console.log(answer); 
// OR:
console.log(add(2, 3));

// another example

function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(12));

// Another kind:

function isEven(number){

    return number % 2 === 0 ? true : false;
}

// Email verification:

function isValidEmail(email){

    if(email.inclues("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("fake@fake.com"));