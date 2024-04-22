let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

let answer = "";

for(let i=1; i<=N; i++){
  answer += `${i}\n`;
}

console.log(answer);