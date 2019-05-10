// Palindrome checker

function palindrome(str) {
    let transformR = /[\W_]/g;

    let transformLC = str.toLowerCase().replace(transformR, '');
    let transformRV = transformLC.split('').reverse().join('');
    return transformRV === transformLC;
}

console.log(palindrome("eme"));