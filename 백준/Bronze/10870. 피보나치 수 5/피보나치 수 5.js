let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const arr = Array.from({length: 21}, ()=>0);

arr[1] = 1;

const n = Number(input[0]);

for(let i=2; i<=20; i++){
  arr[i] = arr[i-2] + arr[i-1];
}

console.log(arr[n]);