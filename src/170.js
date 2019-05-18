// WeakSet

let obj1 = {
    name: 'Shield',
    age: 2
};

let obj2 = {
    name: 'Louise',
    age: 2
};

let eme = new WeakSet([obj1, obj2]);

console.log(eme.has(obj1));
console.log(eme.has(obj2));




