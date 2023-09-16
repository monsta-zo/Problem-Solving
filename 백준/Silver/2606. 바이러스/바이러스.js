let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const num = Number(input[0]);

const graph = Array.from(Array(num+1), ()=>Array());

for(let i=2; i<=Number(input[1])+1; i++){
  let [n1, n2] = input[i].split(" ").map(Number);

  graph[n1].push(n2);
  graph[n2].push(n1);
}

const visited = Array(num+1).fill(false);
let answer = 0;

const dfs = (v) => {
  visited[v] = true;
  answer++;

  for(i of graph[v]){
    if(!visited[i]){
      dfs(i);
    }
  }
}

dfs(1)

console.log(answer-1);