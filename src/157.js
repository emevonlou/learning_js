// using spread within functions

function makeSandwich(bread, cheese, sauce) {
    console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done! `);
}

const ingredients = ['white', 'Cheddar','barbecue'];

makeSandwich(...ingredients);

function makeJuice(water, sugar, fruit) {
    console.log(`Our juice with ${water}, water, ${sugar} sugar and ${fruit} is done! `);
}

const ingredients2 = ['milk', 'chocolate', 'more Sugar'];

makeJuice(...ingredients2);