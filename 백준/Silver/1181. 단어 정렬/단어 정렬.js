let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0])

let arr = [];

for(let i=1; i<N+1; i++){
  arr.push(input[i]);
}

arr = [...new Set(arr)]

arr.sort((a,b)=>{
  if(a.length!==b.length) return a.length-b.length;
  else{
    if(a<b) return -1;
    else return 1;
  }
})

console.log(arr.join("\n"))