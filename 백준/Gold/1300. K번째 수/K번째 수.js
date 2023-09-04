let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const k = Number(input[1]);

let min = 1;
let max = N*N;
let answer = 0;

while(min<=max){
  let mid = parseInt((min+max)/2);
  
  let count = 0;
  
  for(let i=1; i<=N; i++){
    count += Math.min(parseInt(mid/i), N);
  }

  if(count<k) min = mid+1;
  else {
    max = mid-1;
    answer = mid;
  }
}

console.log(answer);
