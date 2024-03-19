let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const numArr = input[1].split(" ").map(Number);
const op = input[2].split(" ").map(Number);

const opNum = op.reduce((acc, cur) => acc + cur);

let max = -1000000001;
let min = 1000000001;

const permu = (cur, result) => {
  if (cur.length === opNum) {
    if(result > max) max = result;
    if(result < min) min = result;
  }

  for (let i = 0; i < 4; i++) {
    if (op[i]) {
      op[i]--;
      cur.push(i);
      let next = result;
      if (i === 0) {
        next = result + numArr[cur.length];
      } else if (i === 1) {
        next = result - numArr[cur.length];
      } else if (i === 2) {
        next = result * numArr[cur.length];
      } else {
        if(result < 0){
          next = -1 * Math.floor(-1 * result / numArr[cur.length]);
        } else {
          next = Math.floor(result / numArr[cur.length]);
        }
      }
      permu(cur, next);
      cur.pop();
      op[i]++;
    }
  }
};

permu([], numArr[0]);

console.log(max?max:0);
console.log(min?min:0);
