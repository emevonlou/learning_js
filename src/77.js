// 'This' 2

function person () {
    // Creating 'age' attribute from 'this'
    this.age = 0;

    // Defining a constant to receive the reference of 'this'
    const self = this;
    // setInterval = Trigger another function from the range you passed
    setInterval(function(){
        self.age++;
        console.log(self.age);
    }/*.bind(this)*/, 1000); // Every 1000 (1 second) milliseconds will be triggered again.
}

new person; // Instantiating from the 'person' function to create an object and firing setInterval