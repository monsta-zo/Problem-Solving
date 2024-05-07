let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const baseOne = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

const baseTwo = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

const [N, M] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(""));
}

let answer = 64;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let countOne = 0;
    let countTwo = 0;
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if (arr[k][l] !== baseOne[k - i][l - j]) countOne++;
        if (arr[k][l] !== baseTwo[k - i][l - j]) countTwo++;
      }
    }
    if(answer > countOne) answer = countOne;
    if(answer > countTwo) answer = countTwo;
  }
}

console.log(answer);
