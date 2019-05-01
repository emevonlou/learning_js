// FreeCodeCamp

function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: function() {
      console.log("nhac nhac nhac");
    },
    describe: function(){
      console.log("my name is" + this.name);
    }
  };
  
  