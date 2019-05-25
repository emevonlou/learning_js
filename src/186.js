function manipulando(arr, comando) {
   
    for(let c of comando){
        let symbol = c.split(' ');
        let comando = symbol[0];

        if(comando == 'add') {
            let indice = Number(symbol[1]);
            let elemento = Number(symbol[2]);
            arr.splice(indice,0,elemento);

        }else if(comando === 'addMany') {
            let indice = Number(symbol[1]);
            let elementos = arr.slice(2).map(Number);
            arr.splice(indice, 0,...elementos)
        }else if(comando === 'contains'){
            let elemento = Number(symbol[1]);
            console.log(arr.indexOf(elemento));
        }else if(comando === 'remove') {
            let indice = Number(symbol[1]);
            arr.splice(indice, 1);
        } else if(comando === 'shift') {
            let posicao = Number(symbol[1]);
            while(posicao > 0) {
                arr.push(arr.shift());
                position--;
            }
        }else if(comando === 'sumPairs'){
            arr = arr
            .map((e, i, arr) => (i < arr.length -1) ? (arr[i] += arr[i + 1]) : (arr[i] = arr[i]))
            .filter((e, i) => i % 2 === 0);
        }else if(comando === 'print') {
            break;
        }
    }
    console.log(arr);
}

manipulando(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);