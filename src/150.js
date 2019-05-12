// ArrayFind and ArrayFilter

const data = [
    {
        name: 'Shield',
        age: 2,
        city: 'Juazeiro'
    },
    {
        name: 'Louise',
        age: 2,
        city: 'Juazeiro'
    }
];

const shield = data.find(person => person.name === 'Shield');
const shieldIndex = data.findIndex(person => person.name === 'Shield');

console.log(shield);
console.log(shieldIndex);

const sampleArray = [4, -5, 0, -1];

const underZero = sampleArray.find(x => x < 0);
console.log(underZero);

const underZeroIndex = sampleArray.findIndex(x => x < 0);
console.log(underZero);