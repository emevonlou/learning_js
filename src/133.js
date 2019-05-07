// Filter (01)

// Uma forma de filtrar a percorrer um Array

const product = [
    {name: 'Notebook', value: 2499, fragile: true},
    {name: 'ipad Pro', value: 4199, fragile: true},
    {name: 'glasses', value: 12.49, fragile: true},
    {name: 'plastic toy', value: 18.99, fragile: false}
];

// função filter propriamente dita:
console.log(product.filter(function(p){
   // return true; Lista completa(todos vão estar no array resultante)
   return false; // nenhum elemento passa
   // return p.value > 2500;
}))

const expensive = products => products.value >= 500;
const fragile = products => products.fragile;

console.log(product.filter(expensive).filter(fragile));