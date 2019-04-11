/*
Functions without arrow functions:


function soma(a,b) {
    return a + b;
}
*/

/*
function sub(a,b) {
    return a - b;
}
*/

/*
function multi(a,b) {
    return a * b;
}

let s = soma(1,1);
let k = sub(2,1);
let i= multi(2,2);
*/

//With Arrow functions

const soma = (a,b) => a + b;
const sub = (a,b) => a - b;
const multi = (a,b) =>  a * b;

console.log(soma(1,1));
console.log(sub(2,1));
console.log(multi(2,2));

const Hi = () => "Hi";

console.log(Hi());