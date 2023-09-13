let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [R,C] = input[0].split(" ").map(Number);

const board = [];

for(let i=1; i<=R; i++){
  board.push(input[i]);
}

const MOVE = [[0,1], [1,0], [0,-1], [-1,0]];

let visited = new Set();
visited.add(board[0][0]);

let answer = 0;

const bt = (i,j,count) => {
  if(answer<count) answer = count;

  for(let k=0; k<4; k++){
    let nextRow = i+MOVE[k][0];
    let nextCol = j+MOVE[k][1];

    if(nextRow < 0 || nextRow >= R || nextCol < 0 || nextCol >= C) continue;
    if(visited.has(board[nextRow][nextCol])) continue;
    visited.add(board[nextRow][nextCol]);
    bt(nextRow,nextCol,count+1);
    visited.delete(board[nextRow][nextCol]);
    
  }
}


bt(0,0,1);

console.log(answer);
