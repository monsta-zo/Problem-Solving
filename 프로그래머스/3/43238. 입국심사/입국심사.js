// n명 입국 심사
// 각 입국 심사 시간 다름
// 무조건 빈 곳으로 가는게 아닌, 더 빨리 끝나는 곳으로 갈 수 있음
// 모든 사람이 받는데 시간 최소
// 입력이 10억 이상이다. -> 이진탐색
// 최악의 경우 -> 심사관 1명이고 걸리는 시간 10억분
// 사람은 10억명 10억X10억

function solution(n, times) {
    times.sort((a,b)=>a-b);
    
    let end = n*times[times.length-1];
    let start = 1;
    
    let answer = end;
    
    while(start<=end){
        let mid = parseInt((end+start)/2);
        
        let num = 0;
        times.forEach(time=>{
            num += parseInt(mid/time);
        })
        
        if(num >= n){
            end = mid-1;
            if(answer>mid) answer=mid;
        }
        else {
            start = mid+1;
        }
    }
    
    return answer;
    
}