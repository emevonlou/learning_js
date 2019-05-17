// Generators

function* louLove() {
    console.log('Calling first name:');
    yield 'Eme';
    console.log('Calling second name:');
    yield 'Joaquim';
    console.log('Calling third name:');
    yield 'Joao';
    console.log('Calling fourth name:');
    yield 'Shield';
    console.log('Calling fifth name:');
    yield 'Louise';
    console.log('Calling sixth name:');
    yield 'Fifi';
}

const names = louLove();
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());