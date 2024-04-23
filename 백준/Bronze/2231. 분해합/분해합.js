let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

let cur = 1;
let flag = false;

while(cur < N){
  let sum = cur;

  for(let c of cur.toString()){
    sum += Number(c);
  }

  if(sum === N){
    console.log(cur);
    flag = true;
    break;
  }
  cur++;
}

if(!flag) console.log(0);