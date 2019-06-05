// Printing steps

function steps(x) {
    // From 0 to x(iterate through rows)
    for (let role = 0; role < x; role++) {
        // create empty string 'escada'
        let escada = '';
        // From 0 to x(iterate through columns)
        for (let coluna = 0; coluna < x; coluna++) {
            // If the current coluna is equal to or less than the current role
            // add a '#' to 'escada'
            if(coluna <= role) {
                escada += '#';
            } else {
                escada += ' ';
            }
        }

        console.log(escada);
    }

}

steps(30);