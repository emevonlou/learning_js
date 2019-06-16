// Level Width Declaration

function levelWidth(root) {
    const arr = [root, 's'];
    const counters = [0];

    while(arr.length > 1) {
        const node = arr.shift();

        if(node === 's') {
            counters.push(0);
            arr.push('s');
        }else {
            arr.push(...node.children);
            counters[counters.length -1]++;
        }
    }

    return counters;
}