// Function (First-class object / first-class Citizens)
// Higher order Function

// Creating function literally
function fun1() { };

// Storing function in a variable
const fun2 = function() { };

// Saving function inside an array
const array = [function(a, b) {return a + b}, fun1, fun2];
console.log(array[0](2, 3));

// Storing in an Object Attribute
const obj = {};
obj.talk = function () { return 'wepa!'};
console.log(obj.talk());

// Passing function as parameter of another function
function running(fun) {
    fun();
}

running(function () { console.log('Executed...') });


// A function can return / contain another function
function soma(a, b) {
    return function(c) {
        console.log(a  = b + c);
    }
}

soma(2, 3)(4);

const fiveMore = soma(2, 3);
fiveMore(4);








