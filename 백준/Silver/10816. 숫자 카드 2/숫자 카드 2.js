let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

function lowerBound(arr, target, start, end){
 while(start<end){
   let mid = parseInt((start+end)/2);

   if(arr[mid]>=target) end = mid;
   else start = mid+1;
 } 
  return end;
}

function upperBound(arr,target, start, end){
  while(start<end){
    let mid = parseInt((start+end)/2);
    if(arr[mid]>target) end = mid;
    else start = mid+1;
  }
  return end;
}

const N= input[1].split(" ").map(Number);
N.push(10000001)
N.push(-10000001)

N.sort((a,b)=>a-b);

const M = input[3].split(" ").map(Number);

let result = "";

M.forEach((card)=>{
  let count = upperBound(N, card, 0, N.length-1) - lowerBound(N, card, 0, N.length-1);

  result += `${count} `;
})

console.log(result);
