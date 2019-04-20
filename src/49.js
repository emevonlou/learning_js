// Destructuring 03

function rand({min= 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// const obj = { max: 50, min: 40};
// console.log(rand(obj));
console.log(rand({ max: 50, min: 40 }));
console.log(rand({ min: 950}));
console.log(rand({})); 