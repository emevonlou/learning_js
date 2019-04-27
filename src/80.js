// Factorial

function fact(n) {
    if (n < 0)
        return -1;
    if (n === 0 || n === 1)
        return 1;
    else
        return (n * fact(n - 1));
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(2));

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));

console.log(fact(10));
console.log(fact(170));
