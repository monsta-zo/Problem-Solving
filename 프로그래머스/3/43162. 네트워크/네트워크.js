function dfs(computer,visited,computers, n){
    visited[computer] = true;
    
    for(let i=0; i<n; i++){
        if(computers[computer][i] && !visited[i]){
            dfs(i,visited,computers, n);
        }
    }
}

function solution(n, computers) {
    const visited = Array.from({length: n}, ()=>false);
    
    let answer = 0;
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i, visited,computers, n);
            answer++;
        }
    }
    
    return answer;
}