const DIRS = [[0,1], [1,0], [0,-1], [-1,0]];

function solution(n) {
    const answer = new Array(n);
    
    for(let i=0; i<n; i++){
        answer[i] = new Array(n).fill(0);
    }
    
    let row = 0;
    let col = 0;
    answer[row][col] = 1;
    
    let start = 2;
    let cur = 0;
    
    while(start<=n*n){
        let [dRow,dCol] = DIRS[cur];
        
        if(row+dRow >=0 && row+dRow < n && col+dCol >=0 && col+dCol < n && answer[row+dRow][col+dCol] ===0){
            row += dRow;
            col += dCol;
            answer[row][col] = start;
            start++;
        }
        else{
            cur = (cur+1)%4;
        }
    }
    
    return answer;
}