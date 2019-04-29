// Basic Algorithm Scripting: Mutations / FreeCodeCamp

function mutation(arr) {
    const first = arr[0].toLowerCase(); 
    const second = arr[1].toLowerCase();
    return second.split('').every((a) => first.indexOf(a) !== -1);  
  }
  
  console.log(mutation(["hello", "hey"]));