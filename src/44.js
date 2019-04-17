// Regex: Match All Letters and Numbers(Freecodecamp)

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; 
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
console.log(quoteSample.length);