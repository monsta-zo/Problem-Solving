// 마을의 집이 동그랗게 배치
// 인접한 두 집을 털면 경보 울림

// 시작집을 기준으로 몇번째 집까지 털었을 때의 최댓값을 계속 저장해놓으면 좋을 듯
// 대신 해당 집까지 털었을 때 그 집을 털었냐 안털었냐를 나눠서 저장해야할 듯 

// 근데 마지막집을 결정할 때, 또 시작집이 털렸냐 안털렸냐로 나눠짐
// 따라서 시작집을 털었을 때 기준으로 한번 계산
// 안털었을 때 기준으로 한번 계산해야할 듯

// 0이면 무조건 안터는게 이득일듯

function solution(money) {
    const length = money.length;
  
    // 마지막 집을 안털거다.
    const dp1 = Array(length).fill(0);
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1]);
    for(let i=2; i<length-1; i++){
        dp1[i] = Math.max(dp1[i-2]+money[i], dp1[i-1]);
    }  
    
    // 마지막 집을 털거다.
    const dp2 = Array(length).fill(0);
    dp2[0] = 0;
    dp2[1] = money[1];
    for(let i=2; i<length; i++){
        dp2[i] = Math.max(dp2[i-2]+money[i], dp2[i-1]);
    }
    
    return Math.max(dp1[length-2], dp2[length-1]);
}