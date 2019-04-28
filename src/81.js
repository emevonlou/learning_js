// Find the Longest Word in a String


function findLongestWordLength(str) {
    var split = str.split(' ');  
    var lw = 0;
    for (var i = 0; i < split.length; i++) {
        if (split[i].length > lw) {
            lw = split[i].length;
        }
    }
    return lw;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");