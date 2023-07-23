let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let distance = input[1].split(" ").map(Number);
let city = input[2].split(" ").map(Number);

let result = 0;

let minIdx = city.length+1;

while(true){
  let min = Math.min(...city.slice(0,city.length-1));
  let minIdx = city.indexOf(min);

  result += min * distance.reduce((acc,cur,idx)=>{
    if(idx>=minIdx) return acc+cur;
    else return acc;
  },0);

  if(minIdx===0) break;
  
  city = city.slice(0,minIdx+1);
  distance = distance.slice(0,minIdx);
}

console.log(result);
