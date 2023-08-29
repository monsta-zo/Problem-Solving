const DIR = {"E" : [0,1], "W" : [0,-1], "S": [1,0], "N": [-1,0]};

function solution(park, routes) {
    park = park.map((str)=>str.split(""));
    
    const height = park.length;
    const width = park[0].length;
    
    let answer = [];
    
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(park[i][j]==="S")
                answer=[i,j];
        }
    }
    
    routes.forEach((route)=>{
        const [dir, step] = route.split(" ");
        
        let flag = false;
        
        const [dRow, dCol] = DIR[dir];
        
        for(let i=1; i<=step; i++){ 
            const nextRow = answer[0]+dRow*i;
            const nextCol = answer[1]+dCol*i;
            if(nextRow>=height || nextRow<0 || nextCol>=width || nextCol<0 || park[nextRow][nextCol] === "X"){
                flag = true;
                break;
            }
        }
        
        if(flag){
            return;
        }
        else{
            answer[0] += step*dRow;
            answer[1] += step*dCol;
        }
        
    })
    
    return answer;

}