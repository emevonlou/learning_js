// Object entries

const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5
}

console.log(Object.entries(animals));

const animalsMap = new Map(Object.entries(animals));

console.log(animalsMap.size);

console.log(animalsMap.has('llama'));
console.log(animalsMap.has('lion'));
console.log(animalsMap.get('alpaca'));