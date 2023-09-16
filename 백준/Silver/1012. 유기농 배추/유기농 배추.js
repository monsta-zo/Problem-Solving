let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const dfs = (graph, n, m, x, y) => {
  if(x<=-1 || x>=n || y<=-1 || y>=m)
    return false;
  if(graph[x][y]==1){
    graph[x][y]=-1;
    dfs(graph,n,m,x-1,y);
    dfs(graph,n,m,x,y-1);
    dfs(graph,n,m,x+1,y);
    dfs(graph,n,m,x,y+1);
    return true;
  }
  return false;
}

let T = Number(input[0]);
let line = 1;
while(T--){
  let [M, N, K] = input[line].split(" ").map(Number);
  let graph = Array.from(Array(N), ()=>Array(M).fill(0));

  for(let i=1; i<=K; i++){
    let [y, x] = input[line+i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  
  let answer = 0;
  for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
      if(graph[i][j]) {
        if(dfs(graph,N,M,i,j)) answer++;
      }
    }
  }
  console.log(answer);
  line += K + 1;
}