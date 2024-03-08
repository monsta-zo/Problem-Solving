let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// 진짜 약수 -> 약수인데 1과 N이 아닌 것
// N의 진짜 약수가 모두 주어질 때, N을 구하여라

let arr = input[1].split(" ").map(Number);

arr.sort((a,b)=>a-b);

console.log(arr[0] * arr[arr.length-1]);