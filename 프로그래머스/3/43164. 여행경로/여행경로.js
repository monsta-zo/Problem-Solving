function solution(tickets) {
    const map = new Map();
    
    tickets.forEach(([start, end])=>{
        if(map.get(start)){
            map.get(start).push([end,false])
            map.get(start).sort((a,b)=>{
                if(a[0] < b[0]) return -1;
                if(a[0] > b[0]) return 1;
                return 0;
            })
        } else {
            map.set(start, [[end, false]]);
        }
    })
    const routes = ['ICN'];
    let answer = [];

    const dfs = (cur) => {
        if(routes.length === tickets.length+1){
            if(answer.length === 0) answer = [...routes];
            return;
        }
        
        const next = map.get(cur);
        if(next){
              for(let i=0; i<next.length; i++){
                if(!next[i][1]){
                    routes.push(next[i][0]);
                    next[i][1] = true;
                    dfs(next[i][0])
                    routes.pop();
                    next[i][1] = false;
                }
            }
        }
      
    }
    
    dfs("ICN");
    
    return answer;
 }