function solution(prices) {
    let answer = [];
    for(let i=0; i<prices.length-1; i++){
        let j;
        for(j=i+1; j<prices.length; j++){
            if(prices[j] < prices[i] || j===prices.length-1){
                answer.push(j-i);
                break;
            }
        }
    }
    answer.push(0);
    return answer;
}