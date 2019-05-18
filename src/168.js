// Proxy

let obj = {
    name: "Shield",
    age: 2,
};

let proxy = new proxy(obj(obj, {
    get(target, name) {
        console.log('Someone is asking for the name =}');
        return target[name];
    },

    set(target, name, value) {
        console.log('Someone is changing the name!');
        target[name] = value.toUpperCase();
    }
}));