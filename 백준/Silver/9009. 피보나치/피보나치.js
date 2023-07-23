let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);
const arr = [];

for(let i=1; i<=N; i++){
  arr.push(Number(input[i]));
}

const pibo = [0,1];

let idx = 0;

while(pibo[idx+1]<Math.max(...arr)){
  pibo.push(pibo[idx]+pibo[idx+1]);
  idx++;
};

arr.forEach((ele)=>{
  let result = "";
  for(let i=pibo.length-1; i>0; i--){
    if(pibo[i]<=ele){
      ele-=pibo[i];
      result = `${pibo[i]} `.concat(result);
    }
  }
  console.log(result);
})

