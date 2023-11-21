// 기능 개선 작업, 각 기능 진도가 100% 일때 서비스 반영
// 각 기능의 개발속도 모두 다름, 뒤에가 먼저 되면 앞에 배포될 때 함께 배포

// progresses -> 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 배열
// speeds -> 각 작업의 개발 속도
// 각 배포마다 몇 개의 기능이 배포되는 지

// 각 배포가 몇 일 남았는 지 구한다.
// 큐에 차례대로 넣는다.
// 앞에서부터 꺼낼 때 뒤에 날짜가 더 작으면 같이 꺼낸다.

function solution(progresses, speeds) {
    let queue = [];
    let answer = [];
    
    for(let i=0; i<speeds.length; i++){
        queue[i] = Math.ceil((100-progresses[i])/speeds[i]);
    }
    
    let count = 1;
    let start = queue.shift();
    
    while(queue.length>0){
        if(queue[0] <= start){
            queue.shift();
            count++;
        } 
        else {
            answer.push(count);
            count = 1;
            start = queue.shift();
        }
    }
    answer.push(count);
    return answer;
}