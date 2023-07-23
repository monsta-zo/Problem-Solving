let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);

const arr = [];

for(let i=1; i<=N; i++){
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a,b)=>{
  if(a[1]===b[1])
    return a[0]-b[0];
  else
    return a[1]-b[1];
})

let count = 0;
let endTime = 0;

arr.forEach(ele=>{
  if(endTime<=ele[0]){
    count++;
    endTime=ele[1];
  }
})

console.log(count);