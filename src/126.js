// Array: Métodos importantes

const p = ['Robert', 'July', 'Kelly', 'Judith'];
p.pop(); // 'Judith' acabou de sair(pop remove o ultimo elemento)
console.log(p);

p.push('Hamlet'); // hamlet entrou!(push adiciona no ultimo elemento)
console.log(p);


p.shift(); // Remove o primerio elemento!
console.log(p);


p.unshift('Hamilton'); //Hamilton entra no primeiro elemento!(unshift add no primeiro elemento)
console.log(p);


// splice pode adicionar e remover elementos
p.splice(2, 0, 'Bottas', 'Massa');
console.log(p);

// remover
p.splice(3, 1); // O Massa sai!
console.log(p); 

const p1 = p.slice(2); // retorna um novo array gerado, no caso, a partir do indice 2
console.log(p1);

const p2 = p.slice(1, 4);
console.log(p2); 
