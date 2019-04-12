// Pass / Assignment by Reference and by Value

const x = {name: 'Shield'};
console.log(x);

// From here the variables x and y
// will be stored in the same memory address
const y = x;
console.log(y);

// Passing a new value to variable y
y.name = 'Weepa!';
console.log(y);
console.log(x);

// Another example: Copy by value
let w = 3;  // When working with primitive types, we make a value copy
console.log(w);

let z = w;
z++ // increasing one unit to the value of the variable z.
console.log(z);
console.log(w);  
// The variables z and w have their independent values.