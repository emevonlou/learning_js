// Herança prototipal usando classes 


class Animal {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }

    hello() {
        console.log(`${this.sound} I'm a ${this.kind}!`);
    }

    static info() {
        console.log('This is a class to create animals!');
    }

    get name(){
        console.log(`${this.sound} My name is Shield!`);
    }
}

const cat = new Animal('cat', 'Meow');
const bird = new Animal('bird', 'xiuixiui');
const dog = new Animal('dog', 'auau');
bird.nickname = 'Eme';

Animal.info();
cat.hello();
cat.name;
bird.hello();
dog.hello();