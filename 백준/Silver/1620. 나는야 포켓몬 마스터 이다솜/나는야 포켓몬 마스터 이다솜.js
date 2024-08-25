let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = [];

for(let i=1; i<=N; i++){
  arr.push(input[i]);
}

const map = new Map();

arr.forEach((word, index)=>{
  map.set(word, index+1);
})

for(let i=N+1; i<=N+M; i++){
  if(Number.isNaN(Number(input[i]))) {
    // 단어인 경우
    console.log(map.get(input[i]));
  } else {
    // 인덱스인 경우
    console.log(arr[Number(input[i])-1]);
  }
}