// 'this' and 'bind'

const person = {
    salutation : 'Good Morning!',
    speak() {
        console.log(this.salutation);
    }
}

person.speak();

const speak = person.speak;
speak(); // Undefined(conflict between paradigms: functional and OO)

// In bind() you pass the object in which you want to be resolved in this
const speakPerson = person.speak.bind(person);

speakPerson();





