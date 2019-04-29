// Basic Algorithm Scripting: Slice and Splice/ FreeCodeCamp

function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice();
    arr1.forEach((a, i) => {
      result.splice(n + i, 0, a);
    });
    return result;
  
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));