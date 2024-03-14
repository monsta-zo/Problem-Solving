let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length-1;
    let parIdx = Math.floor(curIdx/2);

    while(curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]){
      [this.heap[parIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parIdx]];

      curIdx = parIdx;
      parIdx = Math.floor(curIdx/2);
    }
  }
  deleteMax() {
    if (this.heap.length === 1) return 0;
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      }
      return max;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      const maxIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;

      [this.heap[maxIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[maxIdx],
      ];
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return max;
  }
}

const heap = new MaxHeap();
const result = [];
for (let i = 1; i <= N; i++) {
  const op = Number(input[i]);

  if (op === 0) {
    result.push(heap.deleteMax());
  } else {
    heap.heappush(op);
  }
}

console.log(result.join("\n"));
