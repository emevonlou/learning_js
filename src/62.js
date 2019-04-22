// If and Else

const printResult =function(note) {
    if(note >= 7) {
        console.log('Approved!');
    }
    else {
        console.log('Reproved!');
    }
}

printResult(10);
printResult(4);
printResult('Wepa!'); // warning!