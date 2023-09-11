let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let inputIdx = 0;

let bt = (arr,k,cur,answer,visited) => {
  if(answer.length === 6){
    console.log(answer.join(" "));
  }

  for(let i=cur; i<k; i++){
    if(visited[i]) continue;
    answer.push(arr[i]);
    visited[i] = true;
    bt(arr,k,i+1,answer,visited);
    answer.pop();
    visited[i] = false;
  }
  
}

while(input[inputIdx].length>1){
  let [k, ...arr] = input[inputIdx].split(" ").map(Number);
  inputIdx++;

  let visited = Array(k).fill(false);

  bt(arr,k,0,[],visited);

  console.log();
}