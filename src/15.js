// Object

// How to create objects literally in Javascript 
// the key pair is a literal way for you to write an object
const prod1 ={};

prod1.name = 'Mobile phone';
prod1.value = 4993.50;
// other way of assigning values
prod1['Discount'] = 0.80;


const prod2 ={
    name: 'T-shirt',
    value: 80.50,
};

// Objects inside objects
const prod3 ={
    name: 'hat',
    value: 70.50,
    obj: {
        red: 1,
        blue: 4,
        black: 3,
        obj: {
            fem: 4,
            masc: 4,
        }
    }
};

console.log(prod1);
console.log(prod2);
console.log(prod3);

