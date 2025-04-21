let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const sumMatrix = [];

for(let i=1; i<=N; i++) {
  const arr = [];
  const first = input[i].split(" ").map(Number);
  const second = input[i+N].split(" ").map(Number);
  for(let j=0; j<M; j++) {
    arr.push(first[j] + second[j]);
  }
  sumMatrix.push(arr);
}

sumMatrix.forEach(arr=>{
  console.log(arr.join(" "));
})