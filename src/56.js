// Error handling (try, catch, throw)

function treatMistakeAndLaunch(mistake) {
    // throw new Error('...');
    // throw true;
    // throw 'message';
    // throw 10;
    throw {
        name: mistake.name,
        msg: mistake.message,
        date: new Date
    }

}


function printBigName(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!');
    }catch(e) {
       treatMistakeAndLaunch(e);
    }finally {
        console.log('End');
    }
}

const obj = { name: 'Shield' };
printBigName(obj);
