// Iterators and Iterables

var txt = "Brazil"; // Iterable
var it = txt[Symbol.iterator](); //Iterator

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for(letter of txt) {
    console.log(letter);
    if(letter === 'a')break;
}

var life = ['friend','kisses','hugs','lovely','true', 'lier'];
var it = life[Symbol.iterator]();

for(love of life) {
    console.log(love);
    if(love === 'lier')break;
}
