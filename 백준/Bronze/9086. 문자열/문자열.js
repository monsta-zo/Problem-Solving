let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0])

for(let i=1; i<=T; i++) {
  console.log(input[i][0] + input[i][input[i].length-1]);
}