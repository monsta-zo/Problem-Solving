let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const timeArr = input[1].split(" ").map(Number);
let result = 0;

timeArr.sort((a, b) => a - b);

timeArr.forEach((time,idx)=>{
  result += time*(N-idx);
})

console.log(result);


