let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);


const sortedArr = [...new Set(arr)].sort((a,b)=>a-b);

const map = new Map();

sortedArr.forEach((ele,idx)=> map[ele]=idx);

let result = "";
arr.forEach(ele=>{result+= `${map[ele] } `});

console.log(result)