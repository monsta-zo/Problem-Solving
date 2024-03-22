let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

let answer = 0;

const arr = []
const set = Array(N+1).fill(0);

for(let i=2; i<=M+1; i++){
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a,b)=>a[2]-b[2]);

for(let i=1; i<=N; i++){
  set[i] = i;
}

const getParent = (x) => {
  if(set[x] === x) return x;
  return (set[x] = getParent(set[x]));
}

const isSameParent = (a, b) => {
  a = getParent(a);
  b = getParent(b);

  if (a === b) return true;
  else return false;
};

const setParent = (a, b) => {
  a = getParent(a);
  b = getParent(b);

  if(a > b) set[a] = b;
  else set[b] = a;
}

for (let i = 0; i < M; i++) {
  const [start, end, cost] = arr[i]

  if (!isSameParent(start, end)) {
    answer += cost;
    setParent(start, end);
  }
}

console.log(answer);