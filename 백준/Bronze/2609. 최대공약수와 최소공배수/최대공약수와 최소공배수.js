let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);

if(a < b) [a, b] = [b, a];

for(let i=a; i>0; i--){
  if(a % i === 0 && b % i === 0){
    console.log(i);
    break;
  } 
}

let cur = a;

while(true){
  if(cur % b === 0){
    console.log(cur);
    break;
  }
  cur += a;
}