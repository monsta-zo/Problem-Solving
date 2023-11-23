// 연결된 그래프의 개수가 총 몇개 인지 구하는 문제

function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);
    
    const dfs = (cur) => {
        visited[cur] = true;
        
        for(let i=0; i<n; i++){
            if(!visited[i] && computers[cur][i]) dfs(i); 
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        } 
    }
    
    return answer;
}