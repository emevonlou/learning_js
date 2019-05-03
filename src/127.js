// Simulando array com um objeto

const q = {0: 'Eme', 1: 'Shield', 2: 'Louise'};
console.log(q);
Object.defineProperty(q, 'toString', {
    value: function() {return Object.values(this)},
    en: false
})

console.log(q[0]);

const myArray = ['Emanuelle', 'Joaquim', 'Ellie'];
console.log(q.toString(), myArray);