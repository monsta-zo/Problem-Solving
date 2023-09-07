let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const W = [];

for(let i=1; i<=N; i++){
  W.push(input[i].split(" ").map(Number));
}

let visited = Array(N).fill(false);
const answer = [];

const bfs = (start,cur,cost,count) => {
  if(count===N && W[cur][start]){
    answer.push(cost+W[cur][start]);
  }
  for(let i=0; i<N; i++){
    if(!visited[i] && W[cur][i]){
      visited[i] = true;
      cost += W[cur][i];
      bfs(start,i,cost,count+1);
      visited[i] = false;
      cost -= W[cur][i];
    }
  }
}
for(let i=0; i<N; i++){
  visited = Array(N).fill(false);
  visited[i] = true;
  bfs(i,i,0,1);
}


console.log(Math.min(...answer));