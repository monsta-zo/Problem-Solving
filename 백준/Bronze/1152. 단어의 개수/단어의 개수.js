let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

if(input[0]===" ") console.log(0);
else console.log(input[0].trim().split(" ").length);