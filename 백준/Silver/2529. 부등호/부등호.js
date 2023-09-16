let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const k = Number(input[0]);

const sign = input[1].split(" ");

const visited = Array(10).fill(false);
let min = 9999999999;
let max = 0;
let answer = [];

const bt = (count) => {
  if(count-1===k){
    if(min > answer.join("").toString()) min = answer.join("");
    if(max < answer.join("").toString()) max = answer.join("");
  }

  for(let i=0; i<10; i++){
    if(visited[i]) continue;
    if(count){
      if(sign[count-1]==="<" && answer[answer.length-1]>=i) continue;
      if(sign[count-1]===">" && answer[answer.length-1]<=i) continue;
    }
    answer.push(i);
    visited[i] = true;
    bt(count+1);
    answer.pop();
    visited[i] = false;
  }
}

bt(0);

console.log(max);
console.log(min);