// while loop = repeat some code while some condition is true

let username = "";

while(username === ""){
    console.log("You didn't enter your name");
}

console.log(`Hello ${username}`);

// gets stuck in infinite loop

// another type of using the while loop:

do{
    username = windows.prompt(`Enter your name`);
}while(username === "" || username === null);

console.log(`Hello ${username}`);

// another use:

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = windows.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("Your are logged in!");
    }else{
        console.log("Invalid credentials! Please try again.");
    }
}

// DO while loop with the same use:

do{
    username = windows.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("Your are logged in!");
    }else{
        console.log("Invalid credentials! Please try again.");
    }
}while(!loggedIn)

