// Map 2

const car = [
    '{"name": "Eraser", "value": 4.50 }',
    '{"name": "Book", "value":10.50 }',
    '{"name": "pencil", "value": 2.50 }',
    '{"name": "pen", "value": 3.00 }'
];

// Retornando um array apenas com os preços


const forObject = json => JSON.parse(json);
const onlyValue = product => product.value;

const result = car.map(forObject).map(onlyValue);
console.log(result);