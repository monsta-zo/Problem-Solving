let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const scores = input[1].split(" ").map(Number);
const max = Math.max(...scores);

const newScores = scores.map(score => score/max * 100);
const sum = newScores.reduce((acc,cur)=> acc+cur, 0);
const avg = sum / N;
console.log(avg);