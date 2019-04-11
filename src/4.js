// Javascript types: number

const height1 = 1.50

// Another way to create a number:
// The number is inside the parentheses of the call of this function "x"

const height2 = Number('1.60')

console.log(height1, height2)

// There are some methods within x that you can use to do some testing. ex:
// know whether the value of height1 is integer or not:

console.log(Number.isInteger(height1))
console.log(Number.isInteger(height2))

// Calculating the media

const weight1 = 40
const weight2 = 50

const total =  weight1 * height1 + weight2 * height2
const media = total / (height1 + height2)

 console.log(media)

 
// To have greater control over the decimal places
// Use the "toFixed" function by passing the number of decimal places that you want it to print.
 console.log(media.toFixed(2))

  
// Converting a numeric value to a string, returning the original mean value
// that being a constant can not change.
console.log(media.toString())

// Converting 'media' to a binary value string
// Use the toString function by assigning the value 2
console.log(media.toString(2))

// Discovering the type
console.log(typeof media)
// Difference between number and Number in Js
console.log(typeof Number);
console.log(typeof Math);

// About Strings
const a = String("You can do it!");
console.log(a);
console.log(typeof a);









