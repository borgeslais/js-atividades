// Variable scope = where a variable is recognized and accessible (local vs global)


// a variable should have unique name, but in this case x can have same name, because they have different scopes
// a variable inside a function has a local scope
// outside a function, a variable has a global scope

// in local scope (is correct):

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}


// in global scope (is wrong):

let x = 3;
let x = 4;

// another example: if we have a function and a global with the same variable, local is used first;

let x = 3;
function1();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}