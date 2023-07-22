let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let result = 0;

for(let i=N; i>0; i--){
  result += Math.floor(K/Number(input[i]));
  K %= Number(input[i]);
}

console.log(result);