function solution(n, wires) {
    const maps = Array.from(Array(n+1), ()=>[]);
    const visited = new Array(n+1).fill(false);
    let count = 0;
    let answer = 100;
    
    for(let wire of wires){
        let [v1, v2] = wire;
        maps[v1].push(v2); 
        maps[v2].push(v1); 
    }    

    const dfs = (cur, other) => {
        visited[cur] = true;
        count++;
        
        for(let v of maps[cur]){
            if(v!==other && !visited[v]){
                dfs(v, other);     
            }
        }
        
    }

    for(let wire of wires){
        count = 0;
        visited.fill(false);
        let temp = 0;
        
        const [root, other] = wire;
        dfs(root, other);
        temp = count;
        count = 0;
        dfs(other, root);
        
        
        answer = Math.min(answer, Math.abs(temp-count));
    }
    
    return answer;
}