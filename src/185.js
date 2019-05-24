function explode(arr,bomba) {
    let nBomba = bomba[0];
    let rBomba = bomba[1];
    let iBomba = arr.indexOf(nBomba);

    while(iBomba !== -1) {
        let comecarExplosaoi = Math.max(0, iBomba - rBomba);
        let tamanhoExplosao = rBomba * 2 + 1;
        arr.splice(comecarExplosaoi, tamanhoExplosao);
        iBomba = arr.indexOf(nBomba);
    }
    let soma = arr.reduce((x,y) => x + y, 0);
    console.log(soma);
}

explode([1, 2, 2, 4, 2, 2, 2, 9 ], [4, 2]);