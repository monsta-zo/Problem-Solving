let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);

const budget = Number(input[2]);

arr.sort((a,b)=> a-b);

let start = 1
let end = Math.max(...arr);
let mid = parseInt((start+end)/2);

let result = 0;

while(start<=end){
  mid = parseInt((start+end)/2);

  let sum = 0;
  arr.forEach((ele)=>{
    if(ele<mid) sum+=ele;
    else sum+=mid;
  })

  if(sum===budget){
    result = mid;
    break;
  } 
  else if(sum<budget){
    start = mid+1;
    if(result<mid){
      result = mid;
    }

  } 
  else end = mid-1;
}

if(arr.reduce((acc,cur)=>acc+cur)<=budget) console.log(Math.max(...arr));
else console.log(result);