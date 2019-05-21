// Matching Pair

function find(m, num) {
    let b = m.length;
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < b; j++) {
            if (i != j) {
                if (m[i] + m[j] == num) {
                    console.log("yeah! found!");
                    return;
                }
            }
        }
    }
    console.log("Oh Noows!Not Found!");
}

let m = [1, 2, 4, 3, 7];

let num = 100;

find(m, num);
