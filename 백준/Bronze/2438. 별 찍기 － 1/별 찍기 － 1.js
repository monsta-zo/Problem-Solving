let fs = require('fs');
let input = fs.readFileSync("dev/stdin").toString().split('\n');

const N = Number(input[0]);

for(let i=1; i<=N; i++){
  let star = "";
  for(let j=1; j<=i; j++){
    star += "*";
  }
  console.log(star);
} 