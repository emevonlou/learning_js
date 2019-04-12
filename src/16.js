// Understanding Null and Undefined

let value; // Not initialized, by default it will be 'undefined'.
console.log(value);


value = null; // Absence of value.
console.log(value);

// console.log(value.toString()); // TypeError.

const prod1 = {};
console.log(prod1.value1);
console.log(prod1);

prod1.value1 = 8.40;
console.log(prod1);

prod1.value1 = undefined; // Avoid assigning undefined
console.log(!!prod1.value1);

// delete prod1.value1;
console.log(prod1);

// Product without price
prod1.value1 = null;
// Converting the Price to a Boolean
console.log(!!prod1.value1);
console.log(prod1);
