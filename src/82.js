// Confirm the Ending/ FreeCodeCamp

function confirmEnding(str, target) {
    const s = str.split('');
    const t = target.split('');
  
    while (s.length > 0 && t.length > 0) {
      if (s.pop() !== t.pop()) {
        return false;
      }
    }
    return true;
  }
  
  console.log(confirmEnding("Emanuelle", "uelle"));