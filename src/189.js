// Given an array, divide array into many chunks yu want

function chunk(array, size) {
    const chunked = [];

    for(let element of array) {
        const last = chunked[chunked.length -1];

        if(!las || last.length === size) {
            chunked.push([element]);
        }else {
            last.push(element);
        }
    }

    return chunked;
}

// solution 2

function chunk2(array2, size2) {
    const chunked2 = [];
    let index = 0;

    while(index < array2.length) {
        chunked2.push(array2.slice(index, index + size2));
        index += size2;
    }

    return chunked2;
}




