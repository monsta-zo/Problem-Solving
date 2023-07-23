let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);

let result = 0;

while(B!==A && B>0){
  if(B%10===1){
    B = (B-1)/10;
    result++;
  }
  else if(B%2!==0){
    console.log(-1);
    return;
  }
  else {
    B /= 2;
    result++;
  }
}

console.log(B?result+1:-1)
