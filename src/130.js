// Map (1)

const numb = [1, 2, 3, 4, 5];

// For com propósito
let result = numb.map(function(e) {
    return e * 2;
})

console.log(result, numb);

const sum10 = e => e + 10;
const triple = e => e * 3;
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = numb.map(sum10).map(triple).map(forMoney);
console.log(result);



