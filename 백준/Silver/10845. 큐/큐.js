let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const queue = [];

let result = [];

for(let i=1; i<=N; i++){
  const [com, num] = input[i].split(" ")

  if(com === "push"){
    queue.push(Number(num));
  } else if(com === "pop"){
    if(queue.length) result.push(queue.shift());
    else result.push(-1);
  } else if(com === "size"){
    result.push(queue.length);
  } else if(com === "empty"){
    if(queue.length) result.push(0);
    else result.push(1);
  } else if(com === "front"){
    if(queue.length) result.push(queue[0]);
    else result.push(-1);
  } else if(com === "back"){
    if(queue.length) result.push(queue[queue.length-1]);
    else result.push(-1);
  }
}

console.log(result.join("\n"));