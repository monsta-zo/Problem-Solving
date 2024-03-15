let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let cur = 0;
let max = 0;
for(let i=0; i<10; i++){
  const [on, off] = input[i].split(" ").map(Number);

  cur -= on;
  if(cur > max) max = cur;
  cur += off;
  if(cur > max) max = cur;
}

console.log(max);