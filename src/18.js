// Functions

function printSoma(x, y) {
    console.log(x + y);
}

printSoma(4, 5);
printSoma(2); // NaN(2 + undefined)
printSoma(); // NaN

// Function with return

function soma(w, z = 1) {
    return w + z;
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());