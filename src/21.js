// Variable declaration with var


var number = 3;

// Escape the global scope

{
    var number = 9;
    console.log("Inside =", number);
}
console.log("Out = ", number);