let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const stack = [[arr[0], 0]];
const answer = [0];

for (let i = 1; i < N; i++) {
  while (stack.length && stack[stack.length - 1][0] < arr[i]) {
    stack.pop();
  }
  if (stack.length) {
    answer.push(stack[stack.length-1][1]+1);    
    stack.push([arr[i],i]);
  } else {
    answer.push(0);
    stack.push([arr[i],i]);
  }
}

console.log(answer.join(" "));
