function solution(keymap, targets) {
    const map = new Map();
    const answer = [];
    
    keymap.forEach(key=>{
        for(let i=0; i<key.length; i++){
            map.set(key[i], Math.min(i+1,map.get(key[i])||i+1));
        }
    })
    
    for(const item of targets){
        answer.push(item.split("").reduce((acc,cur)=>acc+map.get(cur),0) || -1); 
    }
    
    return answer;
    
}