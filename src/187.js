// 1
const string = "abacate";
const chars = {};

for(let s of string) {
    if(!chars[s]) {
        chars[s] = 1;
    }else {
        chars[s]++;
    }
}

console.log(chars);

// 2
const chars2 = {};

for(let s of string) {
    chars2[s] = chars2[s] + 1 ||  1;
}

console.log(chars2);

// 3
function maxChar(str) {
    const chars3 = {};
    let maximo = 0;
    let maxChar = '';

    for(let s of str) {
        if(chars3[s]) {
            chars3[s]++;
        }else {
            chars3[s] = 1;
        }
    }
   for(let c in chars3) {
      if(chars3[c] > maximo) {
          maximo = chars3[c];
          maxChar = c;
      } 
   }

   return maxChar;
}

console.log(maxChar("abacate"));