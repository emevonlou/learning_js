// Name / value pair

// You define your variable within a lexical context (1):
// Lexical Context: physical location of your code in which your variable was defined.
const salutation = "Hello!"; 

// Defining a function
function exec() {
    const salutation = "Okay?"; // Lexical context (2).
}
// The variables are in different contexts, so there will be no conflict.

// Objects are nested groups of name / value pairs
const client = {
    name: "Shield",
    age: 2,
    Weight: 4,
    address: {
        place: "very cool street",
        number: 369
    }
}

console.log(salutation);
console.log(exec());
console.log(client);
