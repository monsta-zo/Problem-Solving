let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);

let count = 0;

arr.forEach((num)=>{
  let flag = true;
  for(let i=2; i<=num-1; i++){
    if(num % i === 0){
      flag = false;
      break;
    }
  }
  if(flag && num!==1) count++;
})

console.log(count);