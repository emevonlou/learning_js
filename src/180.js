// First Whole number that doesn't exist

function find(array) {
    array.sort();
    var found = -1;
    for(var i = 0;i < array.length; i++) {
        if(found == array[i] || found + 1 == array[i]) {
            found = array[i];
        }else {
            return found + 1;
        }
    }
    return found + 1;
}

var array =[1, 4, 0, 3, 6, 2];

var arrayN = find(array);
console.log(arrayN);