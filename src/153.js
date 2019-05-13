// Concat

const daughters = ['Louise', 'fifi'];
const sons = ['Shield', 'Nanook'];

const all = daughters.concat(sons);
console.log(all, daughters, sons);

console.log(daughters.concat(sons, 'Rob'));

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));
