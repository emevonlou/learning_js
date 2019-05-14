// Spread Operator

let front = ['React', 'Vue', 'Angular'];
let back = ['C++', 'python', 'Nodejs'];
let fullStack = front.concat(back);

console.log(fullStack);
console.log([...'Eme']);
console.log(...front);

let fullstack2 = [...front, 'RxJS', ...back];

console.log(fullstack2);