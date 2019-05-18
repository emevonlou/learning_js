// set

let mySet = new Set(['Eme', 'Joaquim', 'João']);

console.log(mySet);
console.log(mySet.size);

mySet.add('Shield');
console.log(mySet);
console.log(mySet.size);

mySet.delete('Eme');
console.log(mySet);

console.log(mySet.has('Eme'));
console.log(mySet.has('Joaquim'));

console.log(mySet[1]); // undefined

// Set é baseado no iterator
console.log(mySet.values());

let hi = mySet.values();

for(name of hi) {
    console.log(name);
}
