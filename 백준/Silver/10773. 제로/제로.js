let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const number = Number(input[0]);

const stack = [];

for(let i=1; i<=number; i++) {
  if(Number(input[i])===0) stack.pop();
  else stack.push(Number(input[i]));
}

console.log(stack.reduce((acc,cur)=>acc+cur,0));