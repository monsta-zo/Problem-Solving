let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let T = Number(input[0]);
let idx = 1;


while (T--) {
  const n = Number(input[idx]);
  const graph = [0, ...input[++idx].split(" ").map(Number)];
  const visited = Array(n + 1).fill(false);
  const finished = Array(n + 1).fill(false);

  let count = 0;
  
  function dfs(x) {
  visited[x] = true;
  let y = graph[x];
  if(!visited[y])
    dfs(y);
  else if (!finished[y]){
    while(y!=x){
      count++;
      y = graph[y];
    }
    count ++;
  }
  finished[x] = true;
}

  
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
    
  }
  idx++;
  console.log(n-count);
}