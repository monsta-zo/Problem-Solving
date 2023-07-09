let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const arr = [];
for(let i=1; i<N+1; i++){
  arr.push(input[i].split(" "));
}
const sorted = arr.sort((a,b)=>{
  if(a[0]!==b[0]) return a[0]-b[0];
  else return 0;
})

sorted.forEach((ele)=>{
  console.log(ele.join(" "))
})