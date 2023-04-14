function solution(lines) {
    const map = new Map();
    
    lines.forEach(([start,end])=>{
        for(let i=start; i<end; i++){
            if(!map.get(i)) map.set(i,1);
            else map.set(i,map.get(i)+1);
        }
    })
    let count = 0;
    for(value of map.values()){
        if(value>1) count++;
    }
    return count;
}