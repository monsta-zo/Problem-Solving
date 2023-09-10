let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const ingre = [];

for(let i=1; i<=N; i++){
  ingre.push(input[i].split(" ").map(Number));
}

let visited = Array(N).fill(false);

let answer = 1000000000n;

const bt = (cur,sour, bitter) => {
  if((answer > (sour-bitter>0?sour-bitter:bitter-sour)) && cur){
    answer = sour-bitter>0?sour-bitter:bitter-sour;
  }

  for(let i=cur; i<N; i++){
    if(!visited[i]){
      visited[i] = true;
      bt(i+1,sour*BigInt(ingre[i][0]), bitter+BigInt(ingre[i][1]));
      visited[i] = false;
    }
  }
}

bt(0,1n,0n)


console.log(String(answer));