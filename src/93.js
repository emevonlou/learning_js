// Function Factory (Função que retorna um objeto)

/* 
    const prod1 = {
    name: '...',
    value: 45
  }

    const prod2 = {
    name: '...',
    value: 1234
  }

*/

// Factory simple

function createPerson() {
    return {
        name: 'Eme',
        lastName: 'von Lou'
    }
}

// Criando um objeto a partir da chamada dessa função:
// createPerson a partir de uma função factory
console.log(createPerson());

function createProd (name,value) {
        return {
            name,
            value,
            discount: 4
        }
}

console.log(createProd('Shield', 120));
console.log(createProd('Notebook', 2199.49));