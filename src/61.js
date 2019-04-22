// using if (02)

function test1(num) {
    if(num > 7) {
        console.log(num);

        console.log('End');
    }
}

test1(6);
test1(8);


function test2(num) {
    if(num > 7); // Warning with ';'
         {
        console.log(num);
    }
}

test2(6);
test2(8);