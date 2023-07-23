let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let extra = 0;
for(let i=1; i<K; i++){
  extra+=i;
}

N -= extra;

if(parseInt(N/K)<=0) console.log(-1);
else if(parseInt(N/K)===N/K) console.log(K-1);
else console.log(K);
 
