// 매순간에 알파벳이 빠른 걸 선택하는게 좋은 건 아님
// 그러다보면 다 여행을 못하는 경우가 생김
// 백트래킹을 해야함

function solution(tickets) {
    const map = new Map();
    
    tickets.forEach(([start,end])=>{
        if(map.has(start)){
            map.get(start).push([end,false]);
        } else {
            map.set(start,[[end,false]]);
        }
    })
    
    let answer = [];
    let routes = ["ICN"];
    
    for(let value of map.values()){
            value.sort((a,b)=>{
                if(a[0]>b[0]) return 1;
                else return -1;
            });
    }
    
    const isAll = () => {
        return Array.from(map.values()).every(start=>start.every(ticket=>ticket[1]===true));
    }
    
    const dfs = () => {
        if(isAll()){
            answer.push([...routes]);
            return;
        }
        const nexts = map.get(routes[routes.length-1]);
        if(!nexts) return;
        nexts.forEach(next=>{
            if(!next[1]){
                routes.push(next[0]);
                next[1] = true;
                dfs();
                routes.pop();
                next[1] = false;
            }
            
        })
    }
    
    dfs();
    
    return answer[0];
    
}