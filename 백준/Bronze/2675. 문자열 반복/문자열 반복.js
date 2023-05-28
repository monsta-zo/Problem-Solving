let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

for(let i = 1; i<=T; i++){
  const data = input[i].split(" ");
  const R = data[0];
  const S = data[1];
  let answer = "";

  for(const C of S){
    answer += C.repeat(R);
  }

  console.log(answer);
}