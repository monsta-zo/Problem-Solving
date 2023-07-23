let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let distance = input[1].split(" ").map(Number);
let city = input[2].split(" ").map(Number);

let result = 0;

for(let i=0; i<city.length-1; i++){
  let sum = 0;
  for(let j=i+1; j<city.length; j++){
    sum += distance[j-1]
    if(city[i]>=city[j]){
      result+=city[i]*sum;
      i=j-1;
      break;
    }
  }
}

console.log(result);