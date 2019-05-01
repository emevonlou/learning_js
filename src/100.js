// Formas diferentes de declarar funções

console.log(sum(4,5));
console.log(sub(4, 5)); // sub is not defined
// Function declaration
function sum(x, y) {
    return x + y;
}



// Function expression
const sub = function (x, y) {
    return x - y;
}

console.log(sub(4, 5));

// named function expression
const mult = function mult(x, y) {
    return x * y;
}
 console.log(mult(4, 5));