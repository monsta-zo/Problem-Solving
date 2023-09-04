let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let answer = [];

function recursive(){
  if(answer.length===M){
    console.log(answer.join(" "));
  }

  for(let i=1; i<=N; i++){
    if(answer.indexOf(i)===-1){
      answer.push(i);
      recursive();
      answer.pop();
    }
  }
}

recursive();