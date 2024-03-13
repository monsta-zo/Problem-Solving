let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const arr = Array.from(Array(100001), ()=>null);

const queue = []
queue.push(N);
arr[N] = 0;

while(queue.length){
  let cur = queue.shift();
  if(cur === K){
    console.log(arr[cur]);
    break;
  }

  if(arr[cur*2] === null && cur*2 <= 100000){
    arr[cur*2] = arr[cur] + 1;
    queue.push(cur*2);
  } 
  if(arr[cur+1] === null && cur+1 <=100000){
    arr[cur+1] = arr[cur] + 1;
    queue.push(cur+1);
  } 
  if(arr[cur-1] === null && cur-1 >=0){
    arr[cur-1] = arr[cur] + 1;
    queue.push(cur-1);
  } 
}
