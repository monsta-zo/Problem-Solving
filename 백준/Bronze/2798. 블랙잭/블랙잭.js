let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

let max = 0;

for(let i=0; i<arr.length-2; i++){
  for(let j=i+1; j<arr.length-1; j++){
    for(let k=j+1; k<arr.length; k++){
      let sum = arr[i]+arr[j]+arr[k];

      if(sum <= M && sum > max) max = sum;
    }
  }
}

console.log(max);