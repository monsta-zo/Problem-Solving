let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const A = input[0].split(" ")[0].split("").reverse().join("");
const B = input[0].split(" ")[1].split("").reverse().join("");

console.log(A>B?A:B)

