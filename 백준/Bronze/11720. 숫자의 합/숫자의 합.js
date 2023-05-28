let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split("").map(Number);

console.log(arr.reduce((acc,cur)=>acc+cur));