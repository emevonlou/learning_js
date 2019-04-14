// Using let in loop (2)

var funcs = [];

for(let i = 0; i < 10; i++) {
    // for each repetition, the 'i' as it has block scope it will have its space.
    funcs.push(function() {
        console.log(i);
    })
}

funcs[1]();
funcs[9]();