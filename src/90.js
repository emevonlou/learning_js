//  Basic Algorithm Scripting: Where do I Belong / FreeCodeCamp


function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    const index = arr.findIndex((a) => a >= num);  
    return index > -1 ? index : arr.length;  
  }
  
  console.log(getIndexToIns([40, 60], 50));