// [요청시점,소요시간] 주어질 때,
// 각 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이면 그 평균이 얼마인지 

// 시간이 적게 걸리는 순으로 해결해야 할 듯
// 하드디스크가 아무것도 안할때는 먼저 요청이 들어온거 부터 (맨처음에 들어온거 먼저 한다)

function solution(jobs) {
    let num = jobs.length;
    let cur = 0;
    let answer = 0;
    
    jobs.sort((a,b)=>b[0]-a[0]);
    
    const queue = [];
    
    while(jobs.length || queue.length){
        while(jobs.length){
            if(jobs[jobs.length-1][0] <= cur) queue.push(jobs.pop());
            else break;
            if(!jobs.length) break;
        }
        // 여기서 정렬 조건 더 필요할 수 도
        if(queue.length){
            queue.sort((a,b)=>b[1]-a[1]);
        
            let nextWork = queue.pop();
            cur += nextWork[1];
            answer += (cur-nextWork[0]);  
        } else {
            cur = jobs[jobs.length-1][0];
        }
      
    }
    
    return parseInt(answer/num);
}