function solution(routes) {
    routes.sort((a,b)=>a[1]-b[1]);
    
    let answer = 0;
    let checked = new Array(routes.length).fill(false);
    let camera = 0;
    
    for(let i=0; i<routes.length; i++){
        if(checked[i]) continue;
        
        camera = routes[i][1];
        answer++;
        for(let j=i+1; j<routes.length; j++){
            if(routes[j][0] <= camera) checked[j] = true;
        }
        
    }
    
    return answer;
}