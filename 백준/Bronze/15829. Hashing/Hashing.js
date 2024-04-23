let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const str = input[1];

const arr = str.split("").map((c)=>c.charCodeAt()-96);

console.log((arr.reduce((acc,cur,idx)=> acc+BigInt(cur)*(31n**BigInt(idx)) ,0n) % 1234567891n).toString());