let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const arr = [];

for(let i=0; i<9; i++){
  arr.push(Number(input[i]));
}

const sum = arr.reduce((cur,acc)=>acc+cur);
let flag = false;

for(let i=0; i<8; i++){
  for(let j=i+1; j<9; j++){
    if(arr[i]+arr[j] === sum - 100){
      arr.splice(j,1);
      arr.splice(i,1);
      flag = true;
      break;
    }
  }
  if(flag) break;
}

arr.sort((a,b)=>a-b);

console.log(arr.join("\n"));