let input = require('fs').readFileSync('dev/stdin').toString().split("\n");

const N = Number(input[0]);

const grid = [];
const MOVE = [[0,1],[1,0],[0,-1],[-1,0]];

for(let i=1; i<=N; i++){
  grid.push(input[i].split(""));
}

let visited = Array.from(Array(N), ()=>Array(N).fill(false));

const dfs = (who,color,i,j) => {
  visited[i][j] = true;

  for(let k=0; k<4; k++){
    const nextI = i + MOVE[k][0];
    const nextJ = j + MOVE[k][1];
    
    if(nextI<0||nextI>=N||nextJ<0||nextJ>=N) continue;
    if(visited[nextI][nextJ]) continue;
    if(who==="normal"){
      if(grid[nextI][nextJ]===color) dfs(who ,color, nextI, nextJ);
    } else {
      if(grid[nextI][nextJ]==="B"){
        if(color === "R" || color === "G") continue;
        dfs(who ,color, nextI, nextJ);
      } else {
        if(color === "B") continue;
        dfs(who ,color, nextI, nextJ);
      }
    }


  }
}
let answer = [];
let count = 0;

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(visited[i][j]) continue;
    dfs("normal",grid[i][j],i,j)
    count++;
  }
}

answer.push(count);
count = 0;
visited = Array.from(Array(N), ()=>Array(N).fill(false));

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(visited[i][j]) continue;
    dfs("blind",grid[i][j],i,j)
    count++;
  }
}

answer.push(count);
console.log(answer.join(" "));


