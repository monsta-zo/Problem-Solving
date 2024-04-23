let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let idx = 0;

while(input[idx] !== "0 0 0"){
  const arr = input[idx].split(" ").map(Number);

  arr.sort((a,b)=>b-a);

  if(arr[0]**2 === arr[1]**2 + arr[2]**2) console.log("right");
  else console.log("wrong");

  idx++;
}