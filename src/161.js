// prototypal inheritance 


// Class
function Animal(kind, sound) {
    // Constructor
    this.kind = kind;
    this.sound = sound;
}


// Method
Animal.prototype.hello = function() {
    console.log(`${this.sound} I'm a ${this.kind}!`);
}

const cat = new Animal('cat', 'Meow');
const bird = new Animal('bird', 'xiuixiui');
const dog = new Animal('dog', 'auau');

cat.hello();
bird.hello();
dog.hello();