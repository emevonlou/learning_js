// Regex: Match All Numbers(freecodecamp)

let numString = "Your sandwich will be $5.00";
let numRegex = /[0-9\d]/gi; // Change this line
let result = numString.match(numRegex).length;

console.log(result);