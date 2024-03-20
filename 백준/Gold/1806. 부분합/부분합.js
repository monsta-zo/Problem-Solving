let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let start = 0
let end = 0;
let sum = nums[0];

let min = 100001

while(start < N && end < N && start <= end){
  
  if(sum >= S){
    if(end-start+1 < min) min = end-start+1;
    sum -= nums[start];
    start++;
  } else {
    end++;
    sum += nums[end]
  }
}

console.log(min===100001?0:min);