// Arrow function e o lexical this

const sandwich = {
    bread: 'white',
    cheese: 'Cheddar',

    prepare: function() {
        return `I want a sandwich with ${this.bread} bread and ${this.cheese}`
    },

    make: function(){
        let that = this;
        window.setTimeout(function(){
            console.log(that.prepare());
        }, 500)
    }
};

const btn = document.getElementById('btn');
btn.addEventListener('click', function(){sandwich.make()});