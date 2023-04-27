const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
console.log(Number(input[0].split(" ")[0])+Number(input[0].split(" ")[1]));
    process.exit();
});