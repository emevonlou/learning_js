// Notação ponto

// Math.ceil
console.log(Math.ceil(6.1));

const obj = {}
    obj.name = "Ball";
// obj['name'] = 'Ball';
console.log(obj.name);


function Obj(name) {
// The reserved word
// 'this' means "Leave an attribute (in the case) public"
    this.name = name;
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj1 = new Obj('chair');
const obj2 = new Obj('table');
console.log(obj1.name);
console.log(obj2.name);

// Associating the function 'exec ()' with obj1 and obj2:
obj1.exec();
obj2.exec();
