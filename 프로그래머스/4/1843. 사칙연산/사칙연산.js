

function solution(arr) {
    const operandNum = Math.ceil(arr.length/2);
    
    const max_dp = Array.from({length: operandNum}, ()=>Array(operandNum).fill(-Infinity));
    const min_dp = Array.from({length: operandNum}, ()=>Array(operandNum).fill(Infinity));
    
    for(let i=0; i<operandNum; i++){
        max_dp[i][i] = Number(arr[i*2]);
        min_dp[i][i] = Number(arr[i*2]);
    }
    
    // 연산자를 몇개씩 묶어서 계산할 것이냐
    // 처음에는 2개, 3개 ..., 모든 연산자 만큼 계산
    for(let cnt=1; cnt<operandNum; cnt++){
        // 어떤 피연산자부터 시작할 것이냐
        for(let i=0; i<operandNum-cnt; i++){
            // 어떤 피연산자까지 계산할 것이냐
            let j = i+cnt;
            // 중간에 어떤 연산자에서 자를 것이냐
            // 그리고 중간 연산자가 +이냐 -이냐에 따라서 최댓값을 만드려면 양쪽 피연산자의 최솟값, 최댓값을 모두 알고 있어야 함
            for(let k=i; k<j; k++){
                if(arr[k*2+1] === "+"){
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k]+max_dp[k+1][j]);
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k]+min_dp[k+1][j]);
                } else {
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k]-min_dp[k+1][j]);
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k]-max_dp[k+1][j]);
                 }
            }
        }
    }
    
    return max_dp[0][operandNum-1];
}