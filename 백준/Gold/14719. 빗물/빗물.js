let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const water = input[1].split(" ").map(Number);

const map = Array.from(Array(H), ()=>Array(W).fill(0));

for(let i=0; i<W; i++){
  for(let j=H-1; j>=H-water[i]; j--){
    map[j][i] = 1;
  }
}

let answer = 0;

for(let i=0; i<H; i++){
  for(let j=0; j<W; j++){
    if(j === 0 || j === W-1 ||map[i][j] === 1) continue;
    let leftFlag = false;
    let rightFlag = false;

    for(let k=j-1; k>=0; k--){
      if(map[i][k] === 1) leftFlag = true;
    }
    for(let k=j+1; k<W; k++){
      if(map[i][k] === 1) rightFlag = true;
    }

    if(leftFlag && rightFlag) answer++;
  }
}

console.log(answer);