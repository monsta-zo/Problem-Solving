function solution(board) {
    const dx = [-1,-1,-1,0,0,1,1,1];
    const dy = [-1,0,1,-1,1,-1,0,1];
    const length = board.length+2;
    board.forEach(row=>{
        row.unshift(0);
        row.push(0);
    })
    board.unshift(new Array(length).fill(0));
    board.push(new Array(length).fill(0));
    
    for(let i=1; i<length-1; i++){
        for(let j=1; j<length-1; j++){
            if(board[i][j]===1){
                for(let k=0; k<8; k++){
                    if(board[i+dx[k]][j+dy[k]]!==1){
                        board[i+dx[k]][j+dy[k]]=2;
                    }
                }
            }
        }
    }
    let count = 0;
    
    for(let i=1; i<length-1; i++){
        for(let j=1; j<length-1; j++){
            if(board[i][j]==0){
                count ++;
            }
        }
    }
    return count;
}