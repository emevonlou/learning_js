// for numbers which are multiples of three print 'shield'.
// for numbers which are multiples of five print "Pack".
// for numbers which are multiples of both three and five print "shieldPack"


function bigBoom(x) {
    for(let i = 1; i <= x; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('shieldPack');
        }else if(i % 3 === 0) {
            console.log('shield');
        }else if(i % 5 === 0) {
            console.log('Pack');
        }else {
            console.log(i);
        }
    }
}

bigBoom(3);