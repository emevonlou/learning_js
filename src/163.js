// using class extended 

class Animal {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`I'm ${this.name}!`);
    }
}

class Cat extends Animal {
    constructor(name,sound){
        super(name);
        this.sound = sound;
    }

    bark() {
        console.log(`${this.sound} I'm ${this.name}!`);
    }
}

const bird = new Animal('Lucy');
const cat = new Cat('Lucy', 'meow!')

bird.hello();
cat.hello();
cat.bark();
console.log(cat.name);
