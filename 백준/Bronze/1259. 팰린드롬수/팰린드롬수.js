let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let idx = 0;

while(input[idx] !== "0"){
  let str = input[idx];
  let reverse = input[idx].split("").reverse().join("");

  if(str === reverse) console.log("yes");
  else console.log("no");

  idx++;
}