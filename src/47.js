// Destructuring

const person = {
    name: 'Ana',
    age: 28,
    place: 'ABC',
    number: 369
}

const {name, age} = person;
console.log(name, age);

const {name: x, age: y} = person;

 const { lastName, funny = true} = person; 
 console.log(lastName, funny);

 