let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [V, E] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= E; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => a[2] - b[2]);

const set = new Array(V + 1).fill(0);
for (let i = 1; i <= V; i++) {
  set[i] = i;
}

const getParent = (x) => {
  if (set[x] === x) return x;
  return (set[x] = getParent(set[x]));
};

const unionParent = (a,b) => {
  a = getParent(a);
  b = getParent(b);

  if(a<b) set[b] = a;
  else set[a] = b;
}

const findParent = (a, b) => {
  a = getParent(a);
  b = getParent(b);

  if(a===b) return true;
  return false;
};

let answer = 0;

for (let edge of arr) {
  const [a, b, cost] = edge;

  if (!findParent(a, b)) {
    answer += cost;
    unionParent(a,b);
  }
}

console.log(answer);