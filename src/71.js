// freeCodeCamp Reverse String

function reverseString(str) {
  let novaString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    novaString = novaString + str[i];
  }
  return novaString;
}

console.log(reverseString("hello"));
