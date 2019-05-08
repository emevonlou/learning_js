// Reduce (2)

const students = [
    {name: 'Eme', note: 7.2, bonus:false},
    {name: 'Maria', note: 9.5, bonus: true},
    {name: 'Louis', note: 9.8, bonus: false},
    {name: 'Ana', note: 8.7, bonus: true}
];

// Desafio 1: Todos os alunos são bolsistas?
// Antes de usar o reduce você deve usar o map
const allB = (result, bonus) => result && bonus;
console.log(students.map(a => a.bonus).reduce(allB));


// Desafio 2: Algum aluno é bolsista?
const someB = (result, bonus) => result || bonus;
console.log(students.map(a => a.bonus).reduce(someB));