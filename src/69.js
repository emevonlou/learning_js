// Break/Continue (cuidado ao desviar o fluxo)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in num) {
    if(x == 5) { 
        // O break não age em cima do 'if'/
        // Age em cima do bloco mais próximo dele do tipo for, while ou switch
        break;
    }
    console.log(`x = ${num[x]}`);
}

