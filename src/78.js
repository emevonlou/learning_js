// Arrow Function!(1)

let double = function(x) {
    return 2 * x;
}

double = (x) => {
    return 2 * x;
}

double = x => 2 * x;   // return implicit
console.log(double(Math.PI));

let hi = function() {
    return 'Hi!';
}

hi = () => 'Hi!';
hi = _ => 'Hi!'; // has a parameter
console.log(hi());

