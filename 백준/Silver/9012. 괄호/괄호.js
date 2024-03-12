let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

for(let i=1; i<=T; i++){
  const arr = input[i].split("")

  let count = 0;
  let flag = true;

  for(let j=0; j<arr.length; j++){
    if(arr[j]==="("){
      count++;
      continue;
    } 
    else if(arr[j]===")"){
      if(count === 0){
        flag = false;
        break;
      } else {
        count--;
        continue;
      }
    }
  }
  if(count > 0){
    console.log("NO");
    continue;
  }

  if(flag) console.log("YES")
  else console.log("NO");
}