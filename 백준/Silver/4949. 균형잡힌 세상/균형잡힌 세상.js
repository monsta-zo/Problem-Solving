let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let idx = 0;

while(input[idx] !== ".") {
  const replacedStr = input[idx].replace(/[^\[\]\(\)]/g, "");

  const stack = [];

  let flag = "yes";

  for(let c of replacedStr) {
    if(c === "(" || c === "[") stack.push(c);
    else{
      if(c === ")"){
        if(stack[stack.length-1] === "(") stack.pop();
        else{
          flag = 'no';
          break;
        }
      }
      else {
        if(stack[stack.length-1] === "[") stack.pop();
        else{
          flag = 'no';
          break;
        }
      }
    }
  }

  if(stack.length > 0) flag = 'no';

  console.log(flag);
  
  idx++;
}
