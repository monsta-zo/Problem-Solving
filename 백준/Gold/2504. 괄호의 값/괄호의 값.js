let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const str = input[0];
const stack = [];

for (const p of str) {
  if (p === "(" || p === "[") {
    stack.push(p);
  } else if (p === ")") {
    let temp = 0;
    let top = 0;
    while (Number.isInteger(top)) {
      temp += top;
      top = stack.pop();
    }
    if (top === "(") {
      stack.push(temp ? temp * 2 : 2);
    } else {
      console.log(0);
      return;
    }
  }
  else if (p === "]") {
    let temp = 0;
    let top = 0;
    while (Number.isInteger(top)) {
      temp += top;
      top = stack.pop();
    }
    if (top === "[") {
      stack.push(temp ? temp * 3 : 3);
    } else {
      console.log(0);
      return;
    }
  }
}

console.log(stack.filter((e)=>!Number.isInteger(e)).length > 0 ? 0 : stack.reduce((acc,cur)=>acc+cur));