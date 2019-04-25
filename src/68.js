// For/In

// For-in will give you the index of the elements
const notes = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notes) {
    console.log(i, notes[i]);
}

const person = {
    name: 'Joa',
    lastName: 'Costa',
    Age: 9,
    Weight: 30
}

for(let attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`);
}

