function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for(let char of str.toLowerCase()) {
    if(checker.includes(char)) {
        counter++;
    }
    }

    return count;
}