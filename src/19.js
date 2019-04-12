// Storing a function in a variable
const printSoma = function(x, y) {
    console.log(a + b);
}

printSoma(5, 8);

// Storing an Arrow function in a variable
const soma = (x, y) => {
    return a + b;
}
console.log(soma(4, 5));

// implicit return
const sub = (x, y) => x - y;
console.log(sub(4, 5));

const print2 = a => console.log(a);
print2('Cool!!');