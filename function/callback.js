// doSomething function
function doSomething() {      
    console.log("Doing something...");
    const message = "Operation completed!";

    myCallback(message);              // callback function
}

function myCallback(result) {
    console.log("Callback function is called!");
    console.log(result);
}

doSomething(myCallback);            // Funtion Call