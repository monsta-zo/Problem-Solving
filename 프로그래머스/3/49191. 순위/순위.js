function solution(n, results) {
    const graph = Array.from({length:n+1}, ()=>[]);
    
    // 양수이면 그 사람 이김, 음수이면 그 사람한테 짐
    results.forEach(([winner,loser])=>{
        graph[winner].push(loser);
        graph[loser].push(-1*winner);
    })
    
    let answer = 0;
    
    for(let i=1; i<=n; i++){
        let visited = Array(n+1).fill(false);
        visited[i] = true;
        let queue = [i];
        const winResult = [];
        const loseResult = [];
        
        while(queue.length){
            const next = queue.shift();
            
            for(const node of graph[next]){
                if(!visited[Math.abs(node)] && node > 0){
                    queue.push(Math.abs(node));
                    winResult.push(node);
                    visited[Math.abs(node)] = true;
                }
            }
        }
        
        visited = Array(n+1).fill(false);
        visited[i] = true;
        queue = [i];
        
        while(queue.length){
            const next = queue.shift();
            
            for(const node of graph[next]){
                if(!visited[Math.abs(node)] && node < 0){
                    queue.push(Math.abs(node));
                    loseResult.push(node);
                    visited[Math.abs(node)] = true;
                }
            }
        }
        if(winResult.length + loseResult.length === n-1) answer++;
    }
    
    return answer;
}