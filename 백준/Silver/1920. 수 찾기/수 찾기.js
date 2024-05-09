let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);

const bit = [];

arr.forEach(n=>bit[n] = 1);

const arr2 = input[3].split(" ").map(Number);

let result = "";

arr2.forEach((n)=>{
  if(bit[n]) result+="1\n"
  else result+="0\n";
})

console.log(result);