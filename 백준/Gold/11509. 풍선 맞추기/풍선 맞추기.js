let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);

const arr = input[1].split(" ").map(Number);
let count = 0;

for(let i=0; i<N; i++){
  if(arr[i]!==-1){
    let current = arr[i];
    count++;
    for(let j=i+1; j<N; j++){
      if(arr[j]===current-1){
        current = arr[j];
        arr[j] = -1;
      }
    }
  }
  
}

console.log(count);