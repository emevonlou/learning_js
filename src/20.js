// Variables(var)

{
    {
        {
            {
              var canBe = "Can be?";
              console.log(canBe);
            }
        }
    }
}
console.log(canBe);

// When the variable is within the scope of the function, it is only visible in scope.
function test() {
    var x = 789;
    console.log(x);
}

test();
// console.log(x);


