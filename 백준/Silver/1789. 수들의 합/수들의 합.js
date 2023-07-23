let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let S = Number(input[0]);

let current = 1;
let result = 0;


while(S>0){
  if(S>current*2){
    S-=current++;
    result++;
  }
  else{
    result++;
    break;
  }
}

console.log(result);