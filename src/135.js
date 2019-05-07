// Reduce

const students = [
    {name: 'Eme', note: 7.2, bonus:false},
    {name: 'Maria', note: 9.5, bonus: true},
    {name: 'Louis', note: 9.8, bonus: false},
    {name: 'Ana', note: 8.7, bonus: true}
]

console.log(students.map(a => a.note));

const result = students.map(a => a.note).reduce(function(accumulator, actual){
    console.log(accumulator, actual);
    return accumulator + actual;
})

console.log(result);