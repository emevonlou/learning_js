// Array

console.log(typeof Array, typeof new Array, typeof[]);

let approved = new Array('Eme','Joaquim', 'Shield');
console.log(approved);

approved = ['Eme', 'Joaquim', 'shield'];
console.log(approved[0]);
console.log(approved[1]);
console.log(approved[2]);
console.log(approved[3]);

// Adicionando elementos dentro de um array:
approved[3]= 'Hilda';
approved.push('João');
console.log(approved[3]);
console.log(approved[4]);
console.log(approved.length);

approved[9] = 'LongMarks';
console.log(approved.length);

// comparando elementos
console.log(approved[8] === undefined);
console.log(approved[8] === null);

console.log(approved);

// ordenando o array com sort()
approved.sort();
console.log(approved);

// Deletando elementos do array
delete approved[1]; 
console.log(approved[1]);
console.log(approved[2]);

// Deletando elementos com splice()
approved = ['Louise', 'Fifi', 'Nanook', 'Dika', 'Laura', 'Helenna'];
approved.splice(1, 3);
// deletando e adicionando elementos
approved.splice(1, 1, 'Elemento1', 'Elemento2');
console.log(approved);


