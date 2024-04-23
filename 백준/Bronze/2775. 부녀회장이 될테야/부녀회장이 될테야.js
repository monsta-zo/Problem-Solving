let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let T = Number(input[0]);

let idx = 1;
while(T--){
  const k = Number(input[idx]);
  idx++;
  const n = Number(input[idx]);
  idx++;
  
  const dp = Array.from({length:15}, ()=>Array(15).fill(0));

  for(let i=1; i<=14; i++){
    dp[0][i] = i;
  }

  for(let i=1; i<=k; i++){
    for(let j=0; j<=n; j++){
       dp[i][j] = dp[i-1].slice(0,j+1).reduce((acc,cur)=>acc+cur, 0);
    }
  }
  console.log(dp[k][n]);
}

