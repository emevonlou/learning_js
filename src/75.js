// Default parameter

// Strategy: 1 generating default value
function sum(x,y,z) {
    x = x || 1;
    y = y || 1;
    z = z || 1;
    return x + y + z;
}

console.log(sum(), sum(3), sum(1, 2, 3), sum(0, 0, 0)); 

// Strategy: 2, 3 and 4 generating default value
function sum2(x, y, z) {
    x = x !== undefined ? x : 1;
    y = 1 in arguments ? y : 1;
    z = isNaN(z) ? 1 : z;
     return x + y +z;
}

console.log(sum2(), sum2(3), sum2(1, 2, 3), sum2(0, 0, 0));


// Default value of es2015 (The best!)
function sum3(x = 1, y = 1, z = 1) {
    return x + y + z;
}

console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0));
