let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let result = "";
const T = Number(input[0]);

for(let i=1; i<=T; i++){
  const [a, b] = input[i].split(" ").map(Number);
  result += `${a+b}\n`;
}

console.log(result);