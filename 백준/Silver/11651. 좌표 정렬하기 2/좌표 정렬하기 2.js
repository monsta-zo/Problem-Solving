let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0])

const arr = [];
for(let i=1; i<N+1; i++){
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a,b)=> {
  if(a[1]!=b[1]) return a[1]-b[1];
  else return a[0]-b[0];
})

let result = ""
for(let i=0; i<N; i++){
  result += `${arr[i][0]} ${arr[i][1]}\n`
}
console.log(result);

