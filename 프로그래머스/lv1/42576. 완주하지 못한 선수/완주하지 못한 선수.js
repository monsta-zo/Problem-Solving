function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach(player=>{
        map.set(player,(map.get(player)||0)+1);
    })
    
    completion.forEach(player=>{
        map.set(player,(map.get(player)||0)-1);
    })
    
    for(let [key,value] of map){
        if(value>0)
            return key;
    }
}