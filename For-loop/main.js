// FOR loop = repeat some code a limited amount of times

for(let i = 0; i <= 2; i++){
    console.log(i);
}

for(let i = 2; i <= 2; i+=2){
    console.log(i);
}

// Skip a number

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue; // Makes skip iteration of the loop
    }
    else {
        console.log(i);
    }    
}

// Break loop

for(let i = 1; i <= 20; i++){
    if(i == 13){
        break; // Makes loop break when it hits 13 (13 is exclusive)
    }
    else {
        console.log(i);
    }    
}


