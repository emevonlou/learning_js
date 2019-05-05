// foreach

Array.prototype.forEach2 = function(callback) {
    for(let i=0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const approved = ['Eme', 'Joaquim', 'shield', 'Louise'];

approved.forEach2(function(name, index, array) {
    console.log(`${index + 1}) ${name}`);
    
})