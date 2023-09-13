let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const board = [];

let answer = 0;

const check = (row, col) => {
  for(let k=0; k<board.length; k++){
    let [i,j] = board[k];
    if(j===col || (Math.abs(row-i)===Math.abs(col-j))) return false;
  }
  return true;
}

const Queen = (count) => {
  if(count===N){
    answer++;
    return;
  }

  for(let i=0; i<N; i++){
    if(check(count,i)){
      board.push([count,i]);
      Queen(count+1);
      board.pop();
    }
  }
}

Queen(0);

console.log(answer);