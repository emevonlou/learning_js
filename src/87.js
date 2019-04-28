// Basic Algorithm Scripting: Title Case a Sentence/ FreeCodeCamp


function titleCase(str) {
    str = str.toLowerCase();
    let words = str.split(' ');
  
    let capitalized = words.map(w => 
         w.charAt(0).toUpperCase() 
         + w.substring(1));
  
    let newStr = '';     
    capitalized.forEach(c => {
      newStr += c + ' ';
    });
  
    return newStr.trim();
  }
  
  console.log(titleCase("I'm a little tea pot"));