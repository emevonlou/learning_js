// Função construtora

function car(maximumSpeed = 200, delta = 5) {
    // assign private
    let currentSpeed = 0;
    // public method
    this.speedUp = function () {
        if(currentSpeed + delta <= maximumSpeed){
            currentSpeed += delta;
        } else {
            currentSpeed = maximumSpeed;
        }
    }

    // more one public method
    this.getCurrentSpeed = function () {
        return currentSpeed;
    }
}

const uno = new car;
uno.speedUp();
console.log(uno.getCurrentSpeed());


const ferrari = new car(350, 20);
ferrari.speedUp();
ferrari.speedUp();
ferrari.speedUp();
console.log(ferrari.getCurrentSpeed());


