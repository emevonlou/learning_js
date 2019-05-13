// Imperative vs declarative

const students = [
    {name: 'Hegel', note: 7.5},
    {name: 'Hegel', note: 7.5}
];

// Imperative
let total = 0;
for(let i= 0; i < students.length; i++) {
    total += students[i].note;
}

console.log(total/ students.length);

// Declarative
const getNote = student => student.note;
const sum = (total1,current) => total1 + current;
const total2 = students.map(getNote).reduce(sum);

console.log(total2 / students.length);


