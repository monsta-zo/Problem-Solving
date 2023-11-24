// 두개의 큐, 하나에서 pop해서 다른 쪽에 집어 넣음 -> 1회
// 각 큐의 원소 합이 같도록, 최소 횟수
// 어떠한 방법으로도 만들 수 없으면 -1 
// 숫자가 10억도 될 수 있으니, bigint로 해야함
// 배열 두개를 붙여서 생각해볼 수 있을 듯

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  
  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }
  
  add(value) {
    if (this.size() === 0) {
      this.storage['0'] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  
  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

function solution(queue1, queue2) {
    const length = queue1.length;
    let queue1Sum = queue1.reduce((acc,cur)=>acc+BigInt(cur),0n);
    let queue2Sum = queue2.reduce((acc,cur)=>acc+BigInt(cur),0n);
    
    const q1 = new Queue();
    const q2 = new Queue();
    
    for(let i=0; i<length; i++){
        q1.add(queue1[i]);
        q2.add(queue2[i]);
    }
    
    let answer = 0;
    
    while(queue1Sum !== queue2Sum){
        if(queue1Sum > queue2Sum){
            const num = q1.popleft();
            queue1Sum -= BigInt(num);
            q2.add(num);
            queue2Sum += BigInt(num);
        } else {
            const num = q2.popleft();
            queue2Sum -= BigInt(num);
            q1.add(num);
            queue1Sum += BigInt(num);
        }
        answer++;
        if(answer === length*3) return -1;
    }
    
    return answer;
}