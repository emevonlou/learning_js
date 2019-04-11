// Template string

const name = 'Emanuelle';
// In string I can not break the line in the middle.
const concatenate = 'Hi, my name is ' + name + '!';

console.log(concatenate);

// With template string I can:
const template = `
Hi, my name is
${name}!`;

 console.log(concatenate,template);

 // Template string in a single line:
 const templates = `${name} is learning with fun !`
 console.log(templates);

 // Placing expressions inside the template string
 console.log(`1 + 1= ${1 + 1}`);

 // Template string with arrow functions
 // text is variable, passing text as parameter
 // Turning text into uppercase letter with toUpperCase ()
 // I assigned the 'up' variable an Arrow function
 const up = text => text.toUpperCase();
 console.log(`Hey... ${up('Be careful')}!`);
