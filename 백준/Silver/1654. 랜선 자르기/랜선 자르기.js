let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [K, N] = input[0].split(" ").map(Number);

let arr = [];

for(let i=1; i<K+1; i++){
  arr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...arr);

let result = 0;

while(start<=end){
  let mid = parseInt((start+end)/2);

  let count = 0n;

  arr.forEach((lan) => {
    count += BigInt(parseInt(lan/mid));
  })

  if(count>=N){
    res = mid;
    start = mid+1;
  }
  else {
    end = mid-1;
  }
}

console.log(res);