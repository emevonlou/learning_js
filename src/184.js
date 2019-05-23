function eme(arr) {
    function m(x, y) {
        let result = x.length - y.length;
        if(result === 0) {
            result = x.localeCompare(y);
        }

        return result;
    }

    arr = arr.sort(m);
    console.log(arr.join('\n'));
}

eme(["Emanuelle", "Joaquim", "João", "Shield", "Louise", "Fifi"]);