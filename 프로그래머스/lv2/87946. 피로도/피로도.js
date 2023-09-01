function dfs (k, dungeons, visited, count, answer) {
    answer.push(count);
    
    for(let i=0; i<dungeons.length; i++){
        let current = dungeons[i];
        
        if(current[0]<=k && !visited[i]){
            visited[i] = true;
            dfs(k-current[1], dungeons, visited, count+1, answer)
            visited[i] = false;
        }
    }
    
}

function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let answer = [];
    
    dfs(k, dungeons, visited, 0, answer)
    
    return Math.max(...answer);
}