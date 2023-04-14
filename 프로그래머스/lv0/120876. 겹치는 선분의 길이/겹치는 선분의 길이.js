function solution(lines) {
    const map = new Map();
    
    lines.forEach(([start,end])=>{
        for(let i=start; i<end; i++){
            map.set(i,(map.get(i)||0)+1);
        }
    })
    let count = 0;
    for(value of map.values()){
        if(value>1) count++;
    }
    return count;
}