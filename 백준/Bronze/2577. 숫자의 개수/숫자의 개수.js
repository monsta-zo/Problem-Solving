let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const arr = [0,0,0,0,0,0,0,0,0,0];

for(let c of (Number(input[0])*Number(input[1])*Number(input[2])).toString()){
  arr[Number(c)]++;
}

console.log(arr.join("\n"));