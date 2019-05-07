// Implementando meu filter

Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
        newArray.push(this[i]);
        }
    } 
    return newArray; 
}

const product = [
    {name: 'Notebook', value: 2499, fragile: true},
    {name: 'ipad Pro', value: 4199, fragile: true},
    {name: 'glasses', value: 12.49, fragile: true},
    {name: 'plastic toy', value: 18.99, fragile: false}
];



const expensive = products => products.value >= 500;
const fragile = products => products.fragile;

console.log(product.filter2(expensive).filter2(fragile));