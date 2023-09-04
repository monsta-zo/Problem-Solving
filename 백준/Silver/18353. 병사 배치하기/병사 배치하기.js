let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.reverse();

const answer = [arr[0]];

for(let i=1; i<arr.length; i++){
  if(answer[answer.length-1] < arr[i]){
    answer.push(arr[i]);
  } else {
    let idx = answer.length-1;
    let start = 0;

    while(start < idx){
      let mid = parseInt((start+idx)/2);

      if(answer[mid] >= arr[i]) idx = mid;
      else start = mid+1;
    }

    answer[idx] = arr[i];
  }
}

console.log(arr.length-answer.length);

