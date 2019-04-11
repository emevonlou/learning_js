//  String

// creating a string
const school = "cod3r";

// It will give me the letter that is in index 4 (fourth letter counting from scratch)
console.log(school.charAt(4));

// taking the value inside the ask or unicode table
console.log(school.charCodeAt(3));

// When I have the digit and I want to know at what index the digit is
console.log(school.indexOf('3'));

// When I want to print from a certain index
console.log(school.substring(1));
console.log(school.substring(0,3));

// concatenate strings
console.log('school'+ school + '!');
console.log('school '.concat(school).concat("!"));

// Replace function
console.log(school.replace(3, 'e'));

// with regular expressions:
// /\d/ = replace all the digits within the text by, in this case, letter 'e'
console.log(school.replace(/\d/, 'e'));

// Replacing all letters and digits by, in this case, letter 'e'
// With the global flag 'g'
console.log(school.replace(/\w/g, 'e'));

// Converting a String Set to an Array Structure
console.log('Shield,Louise,Fifi'.split(','));

// Replacing the quotes with regex gives the same result
console.log('Shield,Louise,Fifi'.split(/,/));











