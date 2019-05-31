// Anagrams solution 2

function anagrams(stringX, stringY) {
    cleanString(stringX) === cleanString(stringY);
}

function cleanString(str) {
    return str
       .replace(/[^\w]/g, '')
       .toLowerCase()
       .split('')
       .sort()
       .join('');
}