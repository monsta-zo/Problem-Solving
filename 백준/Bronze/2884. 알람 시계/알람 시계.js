let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

function alarm(hour, minute){
  if(minute-45<0){
    hour--;
    minute = minute+60-45;
    if(hour<0){
      hour = 23;
    }
  }
  else {
    minute -= 45;
  }
  console.log(`${hour} ${minute}`)
}

alarm(hour,minute);