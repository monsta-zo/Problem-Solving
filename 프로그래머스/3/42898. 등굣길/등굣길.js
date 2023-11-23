// 최단경로인지, 그리고 그 최단경로가 몇개인지 알아야 함

function solution(m, n, puddles) {
    const routes = Array.from({length: n+1}, ()=>Array(m+1).fill(0));
    
    routes[1][1] = 1;
    
    for(let [puddleC, puddleR] of puddles){
        routes[puddleR][puddleC] = -1;
    }
    
    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(routes[i][j]===-1) continue;
            
            if(i+1 <= n && routes[i+1][j]!==-1){
                routes[i+1][j] = (routes[i+1][j] + routes[i][j]) % 1000000007;
            }
            
            if(j+1 <= m && routes[i][j+1]!==-1){
                routes[i][j+1] = (routes[i][j+1] + routes[i][j]) % 1000000007;
            }
        }
    }
    
    return routes[n][m]
    
}