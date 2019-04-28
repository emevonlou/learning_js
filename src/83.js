// Basic Algorithm Scripting: Repeat a String Repeat a String/ FreeCodeCamp

function repeatStringNumTimes(str, num) {
    if (num < 0) {
      return "";
    }
  
    if (num === 0) {
      return str;
    }
  
    let s = str;
  
    for (let i = 1; i < num; i++) {
      str += s;
    }
    // repeat after me
    return str;
  }
  
  console.log(repeatStringNumTimes("*", 3));