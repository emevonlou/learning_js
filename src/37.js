// Function vs. Object

// A function that belongs to the JS API itself:
console.log(typeof Object);

// An object created from a function.
// Making a parallel with C ++ (It's like calling a constructor)
console.log(typeof new Object);

// Creating an empty function:
const Client = function() {};
console.log(typeof Client);
console.log(typeof new Client);

// Creating instance from a class
// (The term class is just a syntax shortcut,
// Actually it's a different way to build a function):
class Product {}; // Padrão do EC 2015 (ES6)

// Because it is a class internally, it will be converted to a function:
console.log(typeof Product);

// returning an object from the instance of that function:
// can call with parentheses or no parentheses.
console.log(typeof new Product());



