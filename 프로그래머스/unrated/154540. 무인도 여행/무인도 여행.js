// 일단 방문 배열만들고, 
// 각 자리가 X가 아니면서, 방문하지 않은 지역에 방문
// 방문한 점을 기준으로 
function solution(maps) {
    const [rowLen, colLen] = [maps.length, maps[0].length];
    
    const visited = Array.from(Array(rowLen), ()=>Array(colLen).fill(false));
    
    const answer = [];
    const MOVE = [[0,1], [1,0], [0,-1], [-1,0]];
    let count = 0;
    
    function dfs (i,j) {
        visited[i][j] = true;
        count+=Number(maps[i][j]);
    
        for(let k=0; k<4; k++){
            let nextRow = i+MOVE[k][0];
            let nextCol = j+MOVE[k][1];
        
          if(nextRow>=0&&nextRow<rowLen&&nextCol>=0&&nextCol<colLen
            && maps[nextRow][nextCol]!=="X"&&!visited[nextRow][nextCol]){
              dfs(nextRow,nextCol,count);
          }
        }
    }
    
    for(let i=0; i<rowLen; i++){
        for(let j=0; j<colLen; j++){
            if(maps[i][j]!=="X" && !visited[i][j]){
                console.log("Here");
                count = 0;
                dfs(i,j)
                answer.push(count);
            }
        }
    }
    
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}