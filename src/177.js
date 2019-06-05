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

console.log('.....................................\n');

const children = {
    fun: 4,
    focused: 5,
    spontaneous: 2,
    timid: 3
}

console.log(Object.entries(children));

const childrenMap = new Map(Object.entries(children));

console.log(childrenMap.size);

console.log(childrenMap.get('fun'));
console.log(childrenMap.get('timid'));
console.log(childrenMap.get('fun'));
console.log(childrenMap.get('focused'));

console.log(childrenMap.has('fun'));
console.log(childrenMap.has('focused'));
console.log(childrenMap.has('spontaneous'));
console.log(childrenMap.has('timid'));