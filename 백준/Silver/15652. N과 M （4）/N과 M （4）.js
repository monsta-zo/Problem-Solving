let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = [];
let answer = ``;

const bfs = (cur,count) => {
  if(count === M){
    answer += arr.join(" ") + "\n";
    return;
  }
  
  for(let i=cur; i<=N; i++){
    arr.push(i);
    bfs(i,count+1);
    arr.pop();
  }
}

bfs(1,0);

console.log(answer);