let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const word = input[0].toUpperCase();

const arr = Array(26).fill(0);

for (let c of word) {
  arr[c.charCodeAt() - 65]++;
}

let max = Math.max(...arr);

if(arr.filter(v=>v===max).length > 1) console.log("?");
else {
  console.log(String.fromCharCode(arr.indexOf(max)+65));
}
