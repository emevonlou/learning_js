// General Matrix Spirals

 function matrix(x) {
     const resultado = [];

     for(let i = 0; i < x; i++) {
         resultado.push([]);
     }

     let contador = 1;
     let colInicial = 0;
     let colFinal = x - 1;
     let iniciarLinha = 0;
     let finalLinha =  x - 1;
     while(colInicial <= colFinal && iniciarLinha <= finalLinha) {
         // Linha do topo
         for(let i = colInicial; i <= colFinal; i++) {
             resultado[iniciarLinha][i] = contador;
             contador++;
         }
         iniciarLinha++;

         // Coluna da direita
         for(let i = iniciarLinha; i <= finalLinha; i++) {
             resultado[i][colFinal] = contador;
             contador++;
         }

         // Linha inferior
         for(let i = colFinal; i >= colInicial; i--) {
            resultado[finalLinha][i] = contador;
            contador++;
         }

         finalLinha--;

         // Coluna Inicial
         for(let i = finalLinha; i >= iniciarLinha; i--) {
             resultado[i][colInicial] = contador;
             contador++;
         }

         colInicial++;
     }

     return resultado;
 }

 console.log(matrix(4));

 