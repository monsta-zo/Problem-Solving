// 앞에서부터 확인해서 뒤에수가 더 크면 제거한다.

function solution(number, k) {    
    let idx = 0;
    let answer = [];
    while(k){
        if(number[idx] >= number[idx+1]){
            answer.push(number[idx]);
        } else {
            k--;
            while(answer[answer.length-1] < number[idx+1]){
                if(k===0) break;
                answer.pop();
                k--;
            } 
        }
        idx++;
        if(idx===number.length-1) break;
    }
    answer.push(number.slice(idx));
    
    answer = answer.slice(0, answer.length-k);
    
    return answer.join("");
}