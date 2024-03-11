let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const stack = [];

let result = [];

for(let i=1; i<=N; i++){
  const [com, num] = input[i].split(" ")

  if(com === "push"){
    stack.push(Number(num));
  } else if(com === "pop"){
    if(stack.length) result.push(stack.pop());
    else result.push(-1);
  } else if(com === "size"){
    result.push(stack.length);
  } else if(com === "empty"){
    if(stack.length) result.push(0);
    else result.push(1);
  } else if(com === "top"){
    if(stack.length) result.push(stack[stack.length-1]);
    else result.push(-1);
  }
}

console.log(result.join("\n"));