// 모든 음식의 스코빌 지수를 K이상 될때까지 반복
// 가장 낮은 + (두번째 낮은 *2)
// 반복해서 정렬해야함 -> 힙

// 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우...?
// 다 0 인 경우 아니면 없지 않나?

// 효율성이 안나옴 -> 힙을 배열이 아닌, 이진 트리로 구성해야함

class Heap {
	constructor(){
		this.heap = [null]; // 첫 원소 사용 X
	}

	heappush(value){
		this.heap.push(value);
		let curIdx = this.heap.length-1;
		let parIdx = parseInt(curIdx/2);

		while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]){
			[this.heap[parIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parIdx]];
			curIdx = parIdx;
			parIdx = parseInt(curIdx/2);
		}
	}
	heappop(){
		const min = this.heap[1];
		if(this.heap.length<=2) this.heap = [null];
		else this.heap[1] = this.heap.pop();

		let curIdx = 1;
		let leftIdx = curIdx * 2;
		let rightIdx = curIdx * 2 + 1;
		
		if(!this.heap[leftIdx]) return min;
		if(!this.heap[rightIdx]){
			if(this.heap[leftIdx] < this.heap[curIdx]){
				[this.heap[leftIdx], this.heap[curIdx]] = [this.heap[curIdx],this.heap[leftIdx]];
			}
			return min;
		}

		while(this.heap[leftIdx]<this.heap[curIdx] || this.heap[rightIdx]<this.heap[curIdx]){
			const minIdx = this.heap[leftIdx]>this.heap[rightIdx]?rightIdx:leftIdx;
			[this.heap[minIdx], this.heap[curIdx]]=[this.heap[curIdx],this.heap[minIdx]];
			curIdx=minIdx;
			leftIdx=curIdx*2;
			rightIdx=curIdx*2+1;
		}
		return min;
	}
}

function solution(scoville, K) {
    let answer = 0;
    let heap = new Heap();
    for(let s of scoville){
        heap.heappush(s);
    }
    while(heap.heap.some(s=>s!==null&&s<K)){
        if(heap.heap.length===2) return -1;
        let first = heap.heappop();
        let second = heap.heappop();
        heap.heappush(first+second*2);
        answer++;
    }
    return answer;
}