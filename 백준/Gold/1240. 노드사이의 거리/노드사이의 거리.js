let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const tree = Array.from(Array(N+1), ()=>Array(N+1).fill(0));
for(let i=1; i<N; i++){
  let [r,c,d] = input[i].split(" ").map(Number);

  tree[r][c] = d;
  tree[c][r] = d;
}

let answer = 0;

const dfs = (visited,cur,end,distance) => {
  visited[cur] = true;
  if(cur===end) answer=distance;

  for(let i=1; i<=N; i++){
    if(tree[cur][i]!==0 && !visited[i]){
      dfs(visited,i,end,distance+tree[cur][i]);
    }
  }
}

for(let i=N; i<N+M; i++){
  let [start, end] = input[i].split(" ").map(Number);

  let visited = Array(N+1).fill(false);
  dfs(visited,start,end,0)
  console.log(answer);
}