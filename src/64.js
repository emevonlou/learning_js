// switch

const printResult = function(note) {
    switch(Math.floor(note)) {
        case 10:
        case 9:
            console.log('Honor board!');
            break;
        case 8: case 7:
            console.log('Approved!');
            break;
        case 6: case 5: case 4:
            console.log('oh noez, study more.');
            break;
        case 3: case 2: case 1: case 0:
             console.log('Reproved');
             break;
        default:
            console.log('Invalid note');
    }
    console.log('End');
}

printResult(9.5);
printResult(8);
printResult(5);
printResult(3);
printResult(-2);
printResult(12);
