let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const a = Number(input[0]);
const b = input[1];

console.log(a*Number(input[1][2]));
console.log(a*Number(input[1][1]));
console.log(a*Number(input[1][0]));
console.log(a*Number(input[1]));