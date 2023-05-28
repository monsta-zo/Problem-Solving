let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let maxValue = 0;
let maxIdx = 0;
for(let i=0; i<9; i++){
  if(maxValue < Number(input[i])){
    maxValue = Number(input[i]);
    maxIdx = i+1;
  }
}

console.log(maxValue);
console.log(maxIdx);
