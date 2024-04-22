let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const year = Number(input[0]);

if(year%400 === 0) console.log(1);
else if(year%4===0 && year%100!==0) console.log(1);
else console.log(0);