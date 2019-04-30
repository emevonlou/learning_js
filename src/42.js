// Match Characters that Occur Zero or More Times(FreeCodeCamp)


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

console.log(result[0]);