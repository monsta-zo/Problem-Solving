// 각 시점의 가격이 몇 초 동안 떨어지지 않는 지


function solution(prices) {
    let answer = [];
    for(let i=0; i<prices.length; i++){
        let flag = true;
        for(let j=i+1; j<prices.length; j++){
            if(prices[j] < prices[i]){
                answer.push(j-i);
                flag=false;
                break;
            }
        }
        if(flag) answer.push(prices.length-i-1);
    }
    return answer;
}