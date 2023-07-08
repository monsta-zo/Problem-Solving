let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const arr = [];

for(i=1; i<N+1; i++){
  arr.push(Number(input[i]));  
}

arr.sort((a,b)=> a-b);

console.log(arr.join("\n"))