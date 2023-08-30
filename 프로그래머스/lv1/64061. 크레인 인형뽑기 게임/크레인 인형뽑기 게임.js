function solution(board, moves) {
    const len = board.length;
    let newBoard = Array.from(Array(len), ()=> new Array(len).fill(0));
    const basket = [];
    
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            newBoard[j][i] = board[i][j];
         }
    }
    
    newBoard = newBoard.map(line=>line.filter(v=>v!==0))
    
    let answer = 0;
    
    moves.forEach(move=>{
        if(newBoard[move-1].length){
            if(basket[basket.length-1] === newBoard[move-1][0]){
                basket.pop();
                newBoard[move-1].shift();
                answer++;
            } else{
            basket.push(newBoard[move-1].shift());
            }
        }
    })
    return answer*2;
}