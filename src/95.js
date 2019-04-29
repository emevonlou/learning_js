// Funções anonimas

const sum = function(x, y) {
    return x + y;
}

const printResult = function(a, b, op = sum) {
    console.log(op(a, b));
}

printResult(3, 4);
printResult(3, 4, sum);
printResult(3, 4, function(x, y) {
    return x - y;
});

printResult(3, 4, (x, y) => x * y);


// criando uma função dentro de um objeto(Anonima)

const person= {
    speak: function() {
        console.log('wepa!');
    }
}

person.speak();