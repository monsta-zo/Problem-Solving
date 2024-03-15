let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

for(let i=1; i<=T; i++){
  const arr = input[i].split(" ").map(Number);
  arr.sort((a,b)=>b-a);
  console.log(arr[2]);
}