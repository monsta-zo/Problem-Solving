let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(min,max);

