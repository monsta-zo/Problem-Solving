let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const chickens = [];
const homes = [];

for (let i = 1; i <= N; i++) {
  for(let j=0; j<N; j++){
     location = input[i].split(" ").map(Number)[j];
    if(location===2) {
      chickens.push([i-1,j]);
    }
    else if(location===1){
      homes.push([i-1,j]);
    }
  }
}

function getDistance(home, selected) {
  let min = 100;
  for(let chicken of selected){
    let [r,c] = chicken;
    let dist = Math.abs(r-home[0]) + Math.abs(c-home[1]);

    min = Math.min(dist,min);
  }

  return min;
};

let answer = 1300;
let selected = [];

function bt(start) {
  if(selected.length === M){
    let sum = 0;
    for(let home of homes){
      sum+=getDistance(home, selected);
    }
    answer = Math.min(answer,sum); 
    return;
  }
  for(let i=start+1; i<chickens.length; i++){
    selected.push(chickens[i]);
    bt(i);
    selected.pop();
  }
}

bt(-1);

console.log(answer);

