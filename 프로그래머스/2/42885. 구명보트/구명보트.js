function solution(people, limit) {
    people.sort((a,b)=>b-a);
    
    let answer = 0;
    
    let start = 0;
    let end = people.length-1;
    while(true){
        if(people[start]+people[end] > limit){
            answer ++;
            start+=1;
        } else {
            answer++;
            start+=1;
            end-=1;
        }
        
        if(start >= end) break;
    }
    
    return start===end?answer+1:answer;
}