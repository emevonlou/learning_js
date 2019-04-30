// Regular Expressions: Match Single Characters Not Specified(FreeCodeCamp)

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line