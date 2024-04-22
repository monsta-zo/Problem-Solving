let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const string = input[i];

  let score = 0;
  let bonus = 0;
  for(let j=0; j<string.length; j++){
      if(string[j]==="O"){
        score+=1;
        score+=bonus;
        bonus+=1;
      } else {
        bonus = 0;
      }
  }
  console.log(score);
}
