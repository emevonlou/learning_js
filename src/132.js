// Implementando um map

Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const car = [
    '{"name": "Eraser", "value": 4.50 }',
    '{"name": "Book", "value":10.50 }',
    '{"name": "pencil", "value": 2.50 }',
    '{"name": "pen", "value": 3.00 }'
];


const forObject = json => JSON.parse(json);
const onlyValue = product => product.value;

const result = car.map(forObject).map2(onlyValue);
console.log(result);