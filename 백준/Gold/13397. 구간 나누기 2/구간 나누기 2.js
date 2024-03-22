let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);

const canDivide = (gap) => {
  let count = 0;
  let min = 10001;
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];

    if (max - min > gap) {
      count++;
      max = arr[i];
      min = arr[i];
    }
  }
  if (count+1 > M) return false;
  else return true;
};

let answer = 10001;

while (start < end) {
  let mid = Math.floor((end + start) / 2);
  
  if (canDivide(mid)) {
    end = mid;
    if (mid < answer) answer = mid;
  } else {
    start = mid + 1;
  }
  // break;
}

console.log(answer);
