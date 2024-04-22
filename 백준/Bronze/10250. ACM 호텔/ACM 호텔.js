let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let T = Number(input[0]);

for(let i=1; i<=T; i++){
  const [H, W, N] = input[i].split(" ").map(Number);

  const floor = N%H || H;

  const issue = parseInt((N-1)/H)+1;

  console.log(floor*100+issue);
}
