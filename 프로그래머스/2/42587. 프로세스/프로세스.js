function solution(priorities, location) {
    let answer = 0;
    while(priorities.length){
        const cur = priorities[0];
        
        if(Math.max(...priorities) > cur){
            priorities.push(priorities.shift());
        } else {
            if(location === 0){
                answer ++;
                return answer;
            } else {
                answer ++;
                priorities.shift();
            }
        }
        if(location === 0) location = priorities.length-1;
        else location--;
    }
    
}