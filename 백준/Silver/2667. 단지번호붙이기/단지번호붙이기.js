let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const map = [];
const visited = Array.from(Array(N), ()=>Array(N).fill(false));

const MOVE = [[0,1],[1,0],[0,-1],[-1,0]];

for(let i=1; i<=N; i++){
  map.push(input[i].split("").map(Number));
}

let count = 0;

const dfs = (r,c) => {
  visited[r][c] = true;
  count++;

  for(let i=0; i<4; i++){
    let nextR = r+MOVE[i][0];
    let nextC = c+MOVE[i][1];

    if(nextR<0||nextR>=N||nextC<0||nextC>=N) continue;
    if(visited[nextR][nextC] || !map[nextR][nextC]) continue;

    dfs(nextR,nextC);
  }
}

const answer = [];

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(visited[i][j] || !map[i][j]) continue;
    count = 0;
    dfs(i,j)
    answer.push(count);
  }
}
answer.sort((a,b)=>a-b);
console.log(answer.length);
for(let num of answer) console.log(num);