let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// 자연수 7개, 홀수 모두 골라 합, 최솟값 

let arr = [];

for(let i=0; i<7; i++){
  arr.push(Number(input[i]));
}

let oddArr = arr.filter((num)=>num%2===1);

if(oddArr.length === 0){
  console.log(-1);
  return;
}

oddArr.sort((a,b)=>a-b);

console.log(oddArr.reduce((acc,cur)=>acc+cur));
console.log(oddArr[0]);