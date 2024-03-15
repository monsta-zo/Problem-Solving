let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [start, end] = input[0].split(" ").map(Number);

let cur = 1;
let count = cur;

let answer = 0;

for(let i=1; i<=1000; i++){
  if(start <= i && i<=end) answer += cur;
  count--;
  if(!count) {
    cur++;
    count = cur;
  }
}

console.log(answer);