let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

// N번쨰로 작은 666이 연속으로 들어가는 수

let cur = 665;
let count = 0;

while(true) {
  cur++;
  if(cur.toString().includes("666")){
    count++;
    if(count === N){
      console.log(cur);
      break;
    }
  }
  
}