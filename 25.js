// Using var in loop (2)

var funcs = [];

for(var i = 0; i < 10; i++) {
   // Adding a new element (an anonymous function) and referencing it in the array.
    funcs.push(function() {
        console.log(i);
    })
}

// Since the variable var is not block-scoped, the result will be 10
funcs[1]();
funcs[9]();