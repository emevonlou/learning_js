// Matching Pair(Advanced)

function resolva(e, soma) {
    let conte = [];
    for(let i = 0; i < 100001; i++) {
        conte.push(0);
    }

    for(let i = 0; i < e.length; i++) {
        conte[e[i]] = conte[e[i]] + 1;
    }

    for(let i =0; i < e.length; i++) {
        if(soma - e[i] == e[i]) {
            if(conte[soma - e[i]] >= 2) {
                console.log(true);
                return;
            }
        }else {
            if(conte[soma- e[i]] >= 1) {
                console.log(true);
                return;
            }
        }
    }
    console.log(false);
}

let e = [1, 3, 2, 7, 6, 8];
let soma = 9;

resolva(e, soma);