let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

console.log(N.toString().split("").sort((a,b)=>b-a).join(""));