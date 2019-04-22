// While

function getIntegerRandom(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = 0;

while(option != -1) {
    option = getIntegerRandom(-1, 10);
    console.log('The option chosen was:', option);
}

console.log('see ya.');