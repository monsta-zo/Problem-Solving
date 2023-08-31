function solution(gems) {
    let num = [...new Set(gems)].length;
    let types = new Map();

    const len = gems.length;
    
    let min = len+1;
    let minIdx = [];
    let end = 0;
    
    for(let start=0; start<len; start++){
        while(end<len && types.size<num){
            types.set(gems[end], (types.get(gems[end])||0)+1)
            end ++;
        }
        if(types.size === num) {
            if(end-start < min) {
                min = end-start;
                minIdx = [start+1, end];
            }
            types.set(gems[start], types.get(gems[start])-1);
            if(types.get(gems[start])<=0){
                types.delete(gems[start]);
            }
        }
    }
    
    
    return minIdx;
}