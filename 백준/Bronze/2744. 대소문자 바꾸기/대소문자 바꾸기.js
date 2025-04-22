let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let answer = "";

for(const s of input[0]) {
  if(s.charCodeAt() > 90) {
    answer += String.fromCharCode(s.charCodeAt()-32);
  } else {
    answer += String.fromCharCode(s.charCodeAt()+32);
  }
}

console.log(answer);