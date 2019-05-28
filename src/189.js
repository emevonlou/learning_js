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




