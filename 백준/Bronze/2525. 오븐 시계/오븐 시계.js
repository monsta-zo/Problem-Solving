let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);
let times = Number(input[1]);

function finish(hour, minute, times){
  minute += times;
  hour += parseInt(minute/60);
  minute %= 60;
  if(hour >= 24) hour %=24;
  console.log(`${hour} ${minute}`)
}

finish(hour,minute,times)