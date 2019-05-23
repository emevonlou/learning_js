function eme(arr) {
    arr= arr.sort((a, b) => b - a);
    let emeArr = [];

    while(arr.length > 0) {
        emeArr.push(arr.shift());
        emeArr.push(arr.pop());
    }

    console.log(emeArr.join(' '));
}

eme([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 22]);