// Callback = a function that is passed as an argument to another function

// Used to handleasynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with database

// "Hey, when you're done, call this next"

hello();
goodbye();

function hello(){
    setTimeout(function(){ // This line of code make us wait for 3 seconds to see the "Hello".
    console.log("Hello");
    }, 3000);
}

function goodbye(){
    console.log("Goodbye");
}

// Callback garanty that a code will be displayed AFTER another process ends

hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}

// ---------

