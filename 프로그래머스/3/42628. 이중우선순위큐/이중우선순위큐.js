// 이중 우선순위 큐
// 최댓값 최솟값을 둘다 알 수 있는 큐...

function solution(operations) {
    let queue = [];
    operations.forEach(operation=>{
        if(operation==="D 1"){
            if(!queue.length) return;
            queue.sort((a,b)=>a-b);
            queue.pop();
        } else if(operation==="D -1"){
            if(!queue.length) return;
            queue.sort((a,b)=>b-a);
            queue.pop();
        } else {
            queue.push(Number(operation.split(" ")[1]));
        }
    })
    
    if(!queue.length) return [0, 0];
    else{
        queue.sort((a,b)=>b-a)
        return [queue[0], queue[queue.length-1]];
    }
}