let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let [A, B, V] = input[0].split(" ").map(Number);

V -= A;

if(V%(A-B) === 0) console.log(V/(A-B)+1);
else console.log(Math.floor(V/(A-B))+2);