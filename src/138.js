// Arrow Functions(playing with process!)

const ireland = ['Dublin', 'Galway', 'Cork'];

const love = ireland.map(function(name){
    return `I love ${name}`;
});

console.log(love);

const loveArrow = ireland.map((name) => {
    return `I Love ${name}!`;
});

console.log(loveArrow);

const loveArrowSingle = ireland.map(name => {
    return `I Love ${name}...`;
});

console.log(loveArrowSingle);

const loveArrowOneLine = ireland.map(name => `I Love ${name} ?`);
console.log(loveArrowOneLine);

const LoveChain = ireland
                         .filter(name => name === 'Dublin')
                         .map(name => `I love ${name}!`);
                    
console.log(LoveChain);