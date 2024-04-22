let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = "";

arr.forEach((n)=>{
  if(n < X) answer+=`${n} `;
})

console.log(answer);