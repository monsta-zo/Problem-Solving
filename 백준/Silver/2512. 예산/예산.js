let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);
const budget = Number(input[2])

let start = 1;
let end = Math.max(...arr);
let mid = 0;
let res = 0;

while(start<=end){
  mid = parseInt((start+end)/2);

  let total = 0;
  
  arr.forEach(ele=>{
    if(ele<mid) total += ele;
    else total += mid;
  })


  if(total > budget) {
    end = mid-1;

  }
  else {
    res = mid;
    start = mid+1;
  }
}

console.log(res);