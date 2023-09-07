let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let answer = [];

const bfs = (cur,count) => {
  if(count === M){
    console.log(answer.join(" "));
    return;
  }
  
  for(let i=cur+1; i<=N; i++){
    answer.push(i);
    bfs(i, count+1);
    answer.pop();
  }
}

bfs(0,0);