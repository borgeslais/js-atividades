// Switch is an efficient replacement to many else if statements

let day = 1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    default:
        console.log(`${day} is not a day`);
    // ... Continue to whole week  
    // If i change the day variable to 7 it will show "It is Saturday"  
    // In case there are no matches add default
}

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break; 
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";           
}

console.log(letterGrade);