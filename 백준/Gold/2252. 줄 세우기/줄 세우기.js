let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const inDegrees = Array(N+1).fill(0);

for(let i=1; i<=M; i++){
  const [start, end] = input[i].split(" ").map(Number);
  graph[start].push(end);
  inDegrees[end] += 1;
}

const queue = [];

for(let i=1; i<=N; i++){
  if(!inDegrees[i]) queue.push(i);
}

const answer = [];

while(queue.length){
  const cur = queue.shift();
  answer.push(cur);
  
  graph[cur].forEach((v)=>{
    inDegrees[v] -= 1;
    if(!inDegrees[v]){
      queue.push(v);
    }
  })
}

console.log(answer.join(" "));