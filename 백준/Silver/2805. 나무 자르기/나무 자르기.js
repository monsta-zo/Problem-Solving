let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const M = input[0].split(" ").map(Number)[1];

const trees = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...trees);

let H = 0;

while(start<=end){
  let mid = parseInt((start+end)/2);

  let length = 0;
  trees.forEach((tree)=>{
    if(tree>mid) length += (tree-mid)
  })
  
  if(length>=M){
    H = mid;
    start = mid+1;
  }
  else {
    end = mid-1;
  }
  
}

console.log(H);