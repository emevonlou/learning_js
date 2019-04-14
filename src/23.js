// Using var with loop (01)

for(var i = 0; i < 10; i++) {
    console.log(i);
}
// var is not block-scoped, so 'i' will also be visible outside the block.
console.log('i =', i);