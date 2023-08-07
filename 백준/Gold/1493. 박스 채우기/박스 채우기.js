let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [length, width, height] = input[0].split(" ").map(Number);
const cubes = new Array(20).fill(0);

const N = Number(input[1]);

for(let i=2; i<N+2; i++){
  const [size, num] = input[i].split(" ").map(Number);

  cubes[size] = num;
}

function nearestSquare(length){
  let idx = 0;
  while(2**idx <= length){
    idx++;
  }

  return idx-1;
}

let start = nearestSquare(length);
start = Math.min(start, nearestSquare(width));
start = Math.min(start, nearestSquare(height));

let used = 0;
let res = 0;

for(let i = start; i>=0; i--){
  used *= 8;

  let edge = 2**i;

  let usage = Math.min(cubes[i], parseInt(length/edge)*parseInt(width/edge)*parseInt(height/edge)-used);

  used += usage;

  res += usage;
}


if(used === length * width * height) console.log(res);
else console.log(-1)

