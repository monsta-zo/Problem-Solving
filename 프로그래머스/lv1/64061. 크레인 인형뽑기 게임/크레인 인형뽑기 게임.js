function solution(board, moves) {
    const len = board.length;
    const basket = [];
    
    for(let i=0; i<len; i++){
        for(let j=0; j<i; j++){
            [board[i][j], board[j][i]] = [board[j][i], board[i][j]];
         }
    }
    
    console.log(board);
    
    board = board.map(line=>line.filter(v=>v!==0))
    
    let answer = 0;
    
    moves.forEach(move=>{
        if(board[move-1].length){
            if(basket[basket.length-1] === board[move-1][0]){
                basket.pop();
                board[move-1].shift();
                answer++;
            } else{
            basket.push(board[move-1].shift());
            }
        }
    })
    return answer*2;
}