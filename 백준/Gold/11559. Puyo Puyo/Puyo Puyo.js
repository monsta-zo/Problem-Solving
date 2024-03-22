let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const map = [];

for (let i = 0; i < 12; i++) {
  map.push(input[i].split(""));
}

const MOVE = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let visited = Array.from({ length: 12 }, () => Array(6).fill(false));

let count = 0;
let point = [];

const bfs = (r, c, color) => {
  count++;
  point.push([r,c]);
  visited[r][c] = true;

  for (let i = 0; i < 4; i++) {
    const nextR = r + MOVE[i][0];
    const nextC = c + MOVE[i][1];

    if (nextR < 0 || nextR >= 12 || nextC < 0 || nextC >= 6) continue;
    if (!visited[nextR][nextC] && map[nextR][nextC] === color) {
      bfs(nextR, nextC, color, count + 1, [...point, [nextR, nextC]]);
    }
  }
};

let answer = 0;

let flag = false;

do {
  flag = false;
  visited = Array.from({ length: 12 }, () => Array(6).fill(false));
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (!visited[i][j] && map[i][j] !== ".") {
        count = 0;
        point = []
        bfs(i, j, map[i][j]);
        if (count >= 4) {
          flag = true;
          point.forEach(([r, c]) => {
            map[r][c] = ".";
          });
        }
      }
    }
  }
  if (flag) answer++;

  for(let i=0; i<6; i++){
    let queue = [];
    for(let j=0; j<12; j++){
      if(map[j][i] !== "."){
        queue.push(map[j][i]);
        map[j][i] = ".";
      }
    }
    let length = queue.length;
    for(let j=11; j>11-length; j--){
      map[j][i] = queue.pop();
    }
  }
} while (flag);

console.log(answer);