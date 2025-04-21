let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const set = new Set(input.map(Number));

for(let i=1; i<=30; i++){
  if(!set.has(i)){
    console.log(i);
  }
}