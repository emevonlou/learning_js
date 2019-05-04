// foreach

const approved = ['Eme', 'Joaquim', 'Louise', 'Joao', 'Shield'];

approved.forEach(function(name, index){
    console.log(`${index + 1} ${name}`);
})

approved.forEach(name => console.log(name));

const eapproved = approved => console.log(approved);
approved.forEach(eapproved);