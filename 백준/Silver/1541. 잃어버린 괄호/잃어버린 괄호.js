let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const str = input[0];

const sumArray = str.split("-").map((ele)=>{
  if(ele.includes("+")){
    return ele.split("+").map(Number).reduce((acc,cur)=>acc+cur,0);
  }
  else return Number(ele);
})

console.log(sumArray.reduce((acc,cur)=>acc-cur));