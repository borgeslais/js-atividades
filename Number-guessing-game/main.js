const minNum = 1;
const maxNum = 100;

// Need to generate random number between min and max number

const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

// If i put a min number greater than 1, i add it to the end of the equation

// const minNum = 50;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + 50;

let attempts = 0;
let guess;
let running = true; // To exit the game when it's over

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
    
    if(isNaN(guess)){ //isNaN to check if is not a number
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){ // To make user enter a number in the range
        window.alert("Please enter a valid number");
    }
    else{ // Means user entered a valid number
        attempts++;
        if(ghuess < answer){
            window.alert("Too low, try again!");
        }
        else if(guess > answer){
            window.alert("Too high, try again!");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}