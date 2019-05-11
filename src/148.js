// ArrayFrom

const text ='Eme';

console.log(Array.from(text));

console.log('..........');

// Exemplo com a HTML(tag <li>)
const list = document.querySelectorAll('#list li');
const listArray = Array.from(list);
console.log(listArray);

const names = listArray.map((name) => name.textContent);

console.log(names);