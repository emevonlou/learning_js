// Do while

function getIntegerRandom(min, max) {
    const value = Math.random() * (max-min) + min;
    return Math.floor(value);
}

let option = -1;

do {
    option = getIntegerRandom(-1, 10);
    console.log( 'The option chosen was:', option );
} while( option != -1);

console.log('See ya')