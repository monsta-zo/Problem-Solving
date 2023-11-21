// 특정 프로세스가 몇 번째로 실행되는 지
// 큐에서 하나 꺼냄
// 대기중인 프로세스 중 우선순위가 더 높은 프로세스 있으면 방금 꺼낸 걸 다시 넣음 (맨뒤로 보냄)
// 없다면 방금 프로세스 실행

// priorities -> 큐에 있는 중요도가 순서대로
// location -> 알고 싶은 프로세스의 위치

function solution(priorities, location) {
    let count = 0;
    while(true){
        const cur = priorities[0];
        const isHigh = priorities.some(v=>v>cur);
        if(isHigh){
            priorities.push(priorities.shift());
            location = location === 0 ? priorities.length-1 : location-1;
        } else {
            priorities.shift();
            count++;
            if(location === 0) break;
            else location--;
        }
    }
    return count;
}