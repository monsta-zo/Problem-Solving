let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

const arr = [];

const isPrime = (num) => {
  if(num === 1) return false;

  for(let i=2; i<=num-1; i++){
    if(num % i === 0) return false;
  }

  return true;
}

for(let i=M; i<=N; i++){
  if(isPrime(i)) arr.push(i);
}

if(!arr.length){
  console.log(-1);
} else {
  console.log(arr.reduce((acc,cur)=>acc+cur));
  arr.sort((a,b)=>a-b);
  console.log(arr[0]);
}

