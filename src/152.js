// Destructuring

var data = {
    name: 'Shield',
    surname: 'Pack', 
    age: 25,
    blog: 'https://shield_pack.com.br',
    social: {
        twitter: '@shield',
        facebook: '/shieldpack'
    }
};

// const name = data.name;
// const surname = data.surname;
// const twitter = data.social.twitter;

// console.log(name);
// console.log(surname);
// console.log(twitter);

const {name, surname} = data;
console.log(name);
console.log(data);
console.log(surname);

const {facebook, twitter} = data.social;
console.log(facebook);
console.log(twitter);

const {facebook: fb} = data.social;

console.log(fb);

const {city = 'Crato'} = data;

console.log(city);