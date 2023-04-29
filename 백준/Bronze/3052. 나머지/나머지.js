let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

input = input.map(el => Number(el))

input = input.map(el => el%42)

input = [...new Set(input)]

console.log(input.length)