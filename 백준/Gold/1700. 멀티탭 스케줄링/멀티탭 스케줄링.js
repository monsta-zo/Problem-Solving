let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const orderArr = input[1].split(" ").map(Number);

let usedArr = new Array(101).fill(false);
let usedCount = 0;

let answer = 0;

for (let i = 0; i < K; i++) {
  if (usedCount < N && !usedArr[orderArr[i]]) {
    usedArr[orderArr[i]] = true;
    usedCount++;
  } else if (!usedArr[orderArr[i]]) {
    const tempArr = [];
    let idx = i;
    while (tempArr.length < N - 1 && idx < K) {
      idx++;
      if (usedArr[orderArr[idx]] && !tempArr.includes(orderArr[idx])) {
        tempArr.push(orderArr[idx]);
      }
    }
    answer++;
    usedArr = new Array(101).fill(false);
    for (let j of tempArr) {
      usedArr[j] = true;
    }
    usedArr[orderArr[i]] = true;
  }
}

console.log(answer);
