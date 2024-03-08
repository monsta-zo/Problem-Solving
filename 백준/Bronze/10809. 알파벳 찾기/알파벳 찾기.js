let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// 알파벳 소문자 단어 S
// 단어에 포함된 경우 처음 등장 위치 (0~)
// 포함 안된 경우 -1

let S = input[0];

let arr = new Array(26).fill(-1);

for(let i=0; i<S.length; i++){
  let idx = S[i].charCodeAt()-97;
  if(arr[idx] === -1){
    arr[idx] = i;
  }
}

console.log(arr.join(" "));