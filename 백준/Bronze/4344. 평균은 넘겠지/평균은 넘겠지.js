let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const C = Number(input[0]);

for(let i=1; i<=C; i++){
  const arr = input[i].split(" ");
  const N = Number(arr.shift());

  const sum = arr.reduce((acc, cur)=> acc+Number(cur), 0);
  const avg = sum / N;

  const over = arr.filter(score => Number(score) > avg );

  const per = over.length / N * 100;

  console.log(parseFloat(Math.round(per*1000)/1000).toFixed(3)+"%");
}