let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

if(N===1){
  console.log(1);
  return;
} else {
  let count = 1;
  let cur = 1;
  while(cur <= 1000000000){
    cur += (6*count);

    if(N <= cur){
      console.log(count+1);
      break;
    }

    count++;
  }
}