// 1~n 노드
// 1번 노드에서 가장 멀리 떨어진 노드 갯수 (최단 경로로 이동했을 때 간선의 개수가 가장 많은)

// 다익스트라 적용해서 거리 다 구한 후, 가장 거리가 먼거 개수 구하면 될듯

function solution(n, edge) {
    const graph = Array.from({length:n+1}, ()=>[]);
    
    edge.forEach(([start,end])=>{
        graph[start].push(end);
        graph[end].push(start);
    })
    
    const distance = Array(n+1).fill(Infinity);
    distance[0] = -1;
    const visited = Array(n+1).fill(false);
    
    const queue = [[1,0]];
    distance[1] = 0;
    
    while(queue.length){
        const [cur, dist] = queue.shift();
        if(visited[cur]) continue;
        distance[cur] = dist;
        visited[cur] = true;
        
        for(let i of graph[cur]){
            queue.push([i,dist+1]);
        }
    }
    return distance.filter(v=>v===Math.max(...distance)).length;
}