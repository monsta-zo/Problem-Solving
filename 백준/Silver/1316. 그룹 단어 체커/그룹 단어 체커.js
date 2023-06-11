let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let count = N;

for(let i=1; i<=N; i++){
  const check = [];
  let current = input[i][0];
  check.push(current);
  for(let j=1; j<input[i].length; j++){
    if(input[i][j]!==current){
      if(check.includes(input[i][j])){
        count--;
        break;
      }
      current = input[i][j];
      check.push(current);
    }
  }
}

console.log(count);