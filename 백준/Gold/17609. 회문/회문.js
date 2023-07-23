let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);

const isPalin = (str) => {
  let start = 0;
  let end = str.length-1;

  while(start<end){
    if(str[start]!==str[end]){
      return false;
    }
    start++;
    end--;
  }

  return true;
}

for(let i=1; i<=T; i++){
  const str = input[i];
  let start = 0;
  let end = str.length-1;

  if(isPalin(str)){
    console.log(0);
    continue;
  }
  else{
    while(start<end){
      if(str[start]!==str[end]){
        if(isPalin(str.slice(start,end))){
          console.log(1);
          break;
        }  
        if(isPalin(str.slice(start+1,end+1))){
          console.log(1);
          break;
        } 
        console.log(2)
        break;
      }
      start++;
      end--;
    }
  }

}
