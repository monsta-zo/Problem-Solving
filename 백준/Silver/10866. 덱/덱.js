let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const deque = [];

let result = [];

for(let i=1; i<=N; i++){
  const [com, num] = input[i].split(" ")

  if(com === "push_front"){
    deque.unshift(Number(num));
  } else if(com === "push_back"){
    deque.push(Number(num));
  } else if(com === "pop_front"){
    if(deque.length) result.push(deque.shift());
    else result.push(-1);
  } else if(com === "pop_back"){
    if(deque.length) result.push(deque.pop());
    else result.push(-1);
  } else if(com === "size"){
    result.push(deque.length);
  } else if(com === "empty"){
    if(deque.length) result.push(0);
    else result.push(1);
  } else if(com==="front"){
    if(deque.length) result.push(deque[0]);
    else result.push(-1);
  } else if(com==="back"){
    if(deque.length) result.push(deque[deque.length-1]);
    else result.push(-1);
  }
}

console.log(result.join("\n"));