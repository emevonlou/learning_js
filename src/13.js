// Boolean
// using let because I will modify the value of the variables

// Literal false
let isAtivo = false;
console.log(isAtivo);

// Literal true
isAtivo =true;
console.log(isAtivo);

// transforming numeric value into boolean
isAtivo = 1;
console.log(!!isAtivo);

// Only one negation gets true
console.log(!isAtivo);

console.log(!true); // be false
console.log(!false); // be true

console.log(!!true); // be true
console.log(!!false); // be false

console.log('Os verdadeiros: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{}); // literal object
console.log(!!Infinity);
// Attribution situation:
console.log(!!(isAtivo = true));

console.log('Os falsos: ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log('Finalizando: ');
// at least one of them has to be true, then prints true.
console.log(!!('' || null || 0 || ' '));
console.log(('' || null || 0 || 'yay'));


// Giving a default value to a given variable
// logical operation over a string
let name = '';
console.log(name || 'Desconhecido');


