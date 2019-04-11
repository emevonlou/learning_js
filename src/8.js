// Object.freeze

let contact = {
    name: "Shield Pack",
    email: "shield@test.com"
};

Object.freeze(contact);

console.log(contact);

console.log(contact.name);

console.log(contact.email);

contact.name = "Louise";

console.log(contact.name);

console.log(contact);