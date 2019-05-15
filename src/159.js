// Promises

var d = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Everything working!');
        } else {
            reject('Error!');
        }
    }, 2000);

});

d
    .then((data) => {
        console.log(data);
        return 'hi';
    })

    .then((data) => console.log(data))
    .catch((err) => console.log(err));