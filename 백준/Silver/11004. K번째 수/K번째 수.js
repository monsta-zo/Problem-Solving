let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

const arr = input[1].split(" ").map(Number);

arr.sort((a,b)=> a-b);

console.log(arr[K-1]);