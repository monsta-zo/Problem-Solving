let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

const op = [" ","+","-"];

function calculate(str){
  let result = 0;
  let temp = 1;
  let last = "+";

  for(let i=1; i<str.length; i++){
    if(str[i]===" "){
      temp = temp*10;
    } else if(str[i]==="+" || str[i] === "-"){
      if(last === "+") result += temp;
      else if(last === "-") result -= temp;
      temp = 0;
      last = str[i];
    } else {
      temp += Number(str[i]);
    }
  }
  if(last === "+") result += temp;
  else result -= temp;
  
  return result;
}

function recursive(N, result, count){;
  if(result.length === N*2-1){
    if(calculate(result)===0){
      console.log(result);
    }
    return;
  }

  for(let j=0; j<3; j++){
    result += op[j];
    result += count.toString();
    recursive(N,result,count+1);
    result = result.slice(0,result.length-2);
  }
}

for(let i=1; i<=T; i++){
  const N = Number(input[i]);

  const visited = Array(N+1).fill(false);

  recursive(N, "1", 2);
  
  console.log("");
}