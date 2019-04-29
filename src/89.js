// Basic Algorithm Scripting: Falsy Bouncer / FreeCodeCamp

function bouncer(arr) {
    return arr.filter((a) => Boolean(a));
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  