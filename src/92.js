// Basic Algorithm Scripting: Chunky Monkey

function chunkArrayInGroups(arr, size) {
    const newArray = []; 
    let i = 0;
    while(i < arr.length) {
      newArray.push(arr.slice(i, i += size));
    }
    return newArray;  
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));