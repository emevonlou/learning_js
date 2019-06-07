// Pyramid solution 1

function pyramid(x) {
    const pontoMedio = Math.floor((2* n-1)/2);

    for(let role= 0; role < x; role++) {
        let nivel = '';

        for(let coluna = 0; coluna < 2 * x -1; coluna++) {
            if(pontoMedio - role <= coluna && pontoMedio + role >= coluna){
                nivel += '#';
            }else {
                nivel += ' ';
            }
        }

        console.log(nivel);
    }
}