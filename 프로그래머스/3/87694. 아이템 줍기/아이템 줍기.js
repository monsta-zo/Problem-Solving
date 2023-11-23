

const STEP = [[0,1],[0,-1],[1,0],[-1,0]];

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const map = Array.from({length:103}, ()=>Array(103).fill(0));
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    
    rectangle.map(([leftX,leftY,rightX,rightY])=>{
        for(let i=leftX*2; i<=rightX*2; i++){
            for(let j=leftY*2; j<=rightY*2; j++){
                if(i===leftX*2 || i===rightX*2 || j===leftY*2 || j===rightY*2){
                    if(map[i][j]===0) map[i][j] = 1;
                }
                else map[i][j] = 2;
            }
        }        
    })
    
    let queue = [[characterX,characterY,0]];
    
    while(queue.length){
        let [x,y,count] = queue.shift();
        map[x][y] = 0;
        
        if(x===itemX && y===itemY) return count/2;
        
        for(let i=0; i<4; i++){
            let nextX = x+STEP[i][0];
            let nextY = y+STEP[i][1];
            
            if(map[nextX][nextY]!==1) continue;
            queue.push([nextX,nextY,count+1]);
        }
    }
    return 0;
}