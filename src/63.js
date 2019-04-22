// if , else if and else

Number.prototype.enter =function(start, end) {
    return this >= start && this <= end;
} 

const printResult = function(note) {
    if(note.enter(9, 10)) {
        console.log('Honor board!');
    } else if(note.enter(7, 8.99)) {
        console.log('Approved!');
    }else if(note.enter(4, 6.99)) {
        console.log('oh noez, study more.');
    }else if(note.enter(0, 3.99)){
        console.log('Reproved!');
    }else {
        console.log('Invalid note');
    }
    console.log('Thats all, folks!');
}

printResult(9.5);
printResult(8);
printResult(5);
printResult(3);
printResult(-2);
printResult(12);
