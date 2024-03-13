function solution(numbers, target) {
    let answer = 0;
    
    const bt = (cur,sum) => {
        if(cur === numbers.length-1){
            if(sum === target) answer++;
            return;
        }
        
        bt(cur+1, sum+numbers[cur+1])
        bt(cur+1, sum-numbers[cur+1])
    }
    
    bt(-1, 0);
    
    return answer;
}