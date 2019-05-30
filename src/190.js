// Anagrams

function anagrams(stringX, stringY) {
    const xCharMap = buildCharMap(stringX);
    const yCharMap = buildCharMap(stringY);

    if(Object.keys(xCharMap).length !== Object.keys(yCharMap).length) {
        return false;
    }

    for(let char in aCharMap) {
        if(xCharMap[char] !== yCharMap[char]) {
            return false;
        }
    }

    return true;
};

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}