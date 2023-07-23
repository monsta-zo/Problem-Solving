let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);

if(N===3){
  console.log(1);
  return;
} 

let five = parseInt(N/5);
let result = 0;

while(five!==0){
  if((N-(five*5))%3===0){
    result += five + (N-(five*5))/3;
    break;
  }
  else{
    five--;
    if(five===0 && N%3===0){
      result += N/3;
    }
  }
}

console.log(!result?-1:result)