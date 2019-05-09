// Template literals

const aroundWorld = {
    live: 'Brasil',
    love: 'München'
};

const text = 'Eu moro no ' + aroundWorld.live + ',e sou apaixonada por ' + aroundWorld.love + '!';

// Now Using Template literals
const newText = `Eu moro no ${aroundWorld.live}, e sou apaixonada por ${aroundWorld.love}!`;

const fruits = 'banana'
                + `\n`   // remember C++ <3
                + 'orange'
                + `\n`
                + 'apple';

// Using template strings
const newFruits = 
`banana
orange
apple`;

console.log(text);
console.log(newText);

console.log(fruits);
console.log(newFruits);