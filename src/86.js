// Basic Algorithm Scripting: Boo who/ FreeCodeCamp

function booWho(bool) {
    if (bool === false)
      return true
    return typeof bool === "boolean" && Boolean(bool);
  }
  
  console.log(booWho(null));