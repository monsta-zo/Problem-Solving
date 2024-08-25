let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const A = input[0];
const B = input[1];
const C = input[2];

let next = 0;

if(!Number.isNaN(Number(A))) {
  next = Number(A) + 3;
} else if(!Number.isNaN(Number(B))) {
  next = Number(B) + 2;
} else {
  next = Number(C) + 1;
}

if(next % 3 === 0 && next % 5 === 0) {
  console.log("FizzBuzz");
} else if (next % 3 === 0) {
  console.log("Fizz");
} else if (next % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(next);
}