// Pyramid solution 2

function pyramid(x, role = 0, nivel = '') {
    if(role === x) {
        return;
    }

    if(nivel.length === 2 * x - 1) {
        console.log(nivel);
        return pyramid(x, role + 1);
    }

    const pontoMedio = Math.floor((2* x - 1) / 2);
    let add;
    if(pontoMedio - role <= nivel.length && pontoMedio + role >= nivel.length) {
        add = '#';
    }else {
        add = ' ';
    }
    pyramid(x, role, nivel + add);
}

pyramid(30);