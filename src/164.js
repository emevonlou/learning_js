// Symbols

let eme = Symbol('name');
let bird = Symbol('name');
console.log(eme);
console.log(bird);
console.log(eme === bird);

let obj = {
    [Symbol('name')]: 'Shield',
    [Symbol('Age')]: '2',
    city: 'Juazeiro'

};

const symbols = Object.getOwnPropertySymbols(obj);

const data = symbols.map(sym => obj[sym]);

console.log(data);