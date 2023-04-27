let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const a = Number(input[0].split(" ")[0]);
const b = Number(input[0].split(" ")[1]);

console.log(a*b);