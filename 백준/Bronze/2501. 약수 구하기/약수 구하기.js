let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let count = 0;

for(let i=1; i<=N; i++){
  if(Number.isInteger(N/i)) count++;
  if(count === K){
    console.log(i);
    return;
  }
}

console.log(0);