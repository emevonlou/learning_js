// Boolean
// using let because I will modify the value of the variables

// Literal false
let person = false;
console.log(person);

// Literal true
person =true;
console.log(person);

// transforming numeric value into boolean
person = 1;
console.log(!!person);

// Only one negation gets true
console.log(!person);

console.log(!true); // be false
console.log(!false); // be true

console.log(!!true); // be true
console.log(!!false); // be false

console.log('the truthful: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{}); // literal object
console.log(!!Infinity);
// Attribution situation:
console.log(!!(person = true));

console.log('the false: ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(person = false));


console.log('Finishing: ');
// at least one of them has to be true, then prints true.
console.log(!!('' || null || 0 || ' '));
console.log(('' || null || 0 || 'yay'));


// Giving a default value to a given variable
// logical operation over a string
let name = '';
console.log(name || 'unknown');


