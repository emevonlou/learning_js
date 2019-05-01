// FreeCodeCamp

function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Bear
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Cat 
    
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };