// FreeCodeCamp

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  
  let glideMixin = function(boat) {
   boat.glide = function() {
       console.log("glide");
   }
  }
  glideMixin(bird);
  glideMixin(boat);
  
  
  
  