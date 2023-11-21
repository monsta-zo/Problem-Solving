function solution(clothes) {
    const map = new Map();
    clothes.forEach(([name, type])=>{
        if(map.has(type)) map.get(type).push(name);
        else map.set(type,[name]);
    })
    let answer = 1;
    
    for(let key of map.keys()){
        answer *= map.get(key).length+1;
    }
    
    return answer-1;
}