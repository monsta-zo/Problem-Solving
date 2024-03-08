let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let num = Number(input[i]);
  let idx = 0;
  let answer = "";
  while (num > 0) {  if (num % 2 === 1) {
      answer += `${idx} `;
    }
    num = Math.floor(num / 2);
    idx++;
  }
  console.log(answer);
}
