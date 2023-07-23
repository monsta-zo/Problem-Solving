let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

let idx = 1;

let arr = [];

for(let i=0; i<T; i++){
  const N=Number(input[idx++]);
  let max = idx+N;
  for(idx; idx<max; idx++){
    arr.push(input[idx].split(" ").map(Number));
  }

  arr.sort((a,b)=>a[0]-b[0]);

  let count = arr.length;
  let current = count+1;
  for(let j=0; j<arr.length; j++){
    if(current > arr[j][1]){
      current = arr[j][1];
    }
    else {
      count--;
    }
  }
  console.log(count);
  arr = [];
}

