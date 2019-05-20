// Object.values

const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5
}

console.log(Object.values(animals));

console.log("Total of animals:", Object.values(animals).reduce((a,b)=> a + b));