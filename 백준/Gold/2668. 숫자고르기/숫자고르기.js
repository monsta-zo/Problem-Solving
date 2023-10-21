let file = require('fs').readFileSync('dev/stdin');
let arr = file.toString().split("\n").map(Number);

const N = arr[0];

const visited = Array(N + 1).fill(false);
const finished = Array(N + 1).fill(false);

const answer = [];

const findCycle = (cur) => {
  visited[cur] = true;
  let next = arr[cur];
  if (visited[next]) {
    if (!finished[next]) {
      while (cur !== next) {
        finished[next] = true;
        answer.push(next);
        next = arr[next];
      }
      finished[cur] = true;
      answer.push(cur);
    }
  } else {
    findCycle(next);
  }
  finished[cur] = true;
}

for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;
  else findCycle(i);
}

console.log(answer.length);
console.log(answer.sort((a,b)=>a-b).join("\n"));