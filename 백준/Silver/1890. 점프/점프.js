let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const arr = [];

for(let i=1; i<=N; i++){
  arr.push(input[i].split(" ").map(Number));
}

const dp = Array.from({length: N}, ()=>Array(N).fill(BigInt(0)));

dp[0][0] = BigInt(1);

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(!dp[i][j]){
      if(i!==0 || j!==0) continue;
    }

    const step = arr[i][j];
    if(j+step < N && step) dp[i][j+step] += dp[i][j];
    if(i+step < N && step) dp[i+step][j] += dp[i][j];
  }
}

console.log(dp[N-1][N-1].toString());