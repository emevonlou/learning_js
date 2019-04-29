// Funções CallBack

const fab = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
    console.log(`${index + 1}. ${name}`);
}

fab.forEach(print);
fab.forEach(function(fab) {
    console.log(fab);
});
fab.forEach(fab => console.log(fab));