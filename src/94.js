// Arrow function(3)

let compareThis = function(param) {
    console.log(this == param);
}

compareThis(global);

const obj = {};
compareThis = compareThis.bind(obj);
compareThis(global);
compareThis(obj);


let compareThisArrow = param => console.log(this === param);
compareThisArrow(global);
compareThisArrow(module.exports);


// usando o bind dentro de uma função Arrow
compareThisArrow = compareThisArrow.bind(obj);
compareThisArrow(obj);
compareThisArrow(module.exports);

