// steps 2

function steps(x, role = 0, escada = '') {
    if(x === role) {
        return;
    }
    if(x === escada.length) {
        console.log(escada);
        return steps(x, role + 1);
    }
    if(escada.length <= role) {
        escada += '#';
    }else {
        escada += ' ';
    }
    steps(x, role, escada);
}

steps(30);