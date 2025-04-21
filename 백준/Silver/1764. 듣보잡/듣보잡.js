let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const hear = [];
const hearSee = [];

for (let i = 1; i <= N; i++) {
  hear.push(input[i]);
}

const hearSet = new Set(hear);

for (let i = N + 1; i <= N + M; i++) {
  if (hearSet.has(input[i])) {
    hearSee.push(input[i]);
  }
}

console.log(hearSee.length);
console.log(hearSee.sort().join("\n"));
