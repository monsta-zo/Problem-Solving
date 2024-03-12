let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

for(let i=1; i<=T; i++){
  console.log(input[i].split(" ").map((word)=>word.split("").reverse().join("")).join(" "));
}