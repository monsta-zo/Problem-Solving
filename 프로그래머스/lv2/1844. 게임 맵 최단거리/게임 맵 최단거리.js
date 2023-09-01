class Queue{
  constructor(){
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item){
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue(){
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
	getLength(){
		return this.tailIndex-this.headIndex;
	}
}

function solution(maps) {
    const [rowLen,colLen] = [maps.length,maps[0].length];
    const visited = Array.from(Array(rowLen), ()=>Array(colLen).fill(false));
    
    const MOVE = [[0,1], [1,0], [0,-1], [-1,0]];
    const queue = new Queue();
    queue.enqueue([0,0]);

    const distance = {};
    visited[0][0] = true;
    distance[[0,0]] = 1;
    
    while(queue.getLength()!==0){
        let cur = queue.dequeue();
        
        for(let i=0; i<4; i++){
            let nextRow = cur[0]+MOVE[i][0];
            let nextCol = cur[1]+MOVE[i][1];
            
            if(nextRow>=0&& nextRow<rowLen && nextCol>=0 && nextCol<colLen
              && maps[nextRow][nextCol] && !visited[nextRow][nextCol]){
                queue.enqueue([nextRow,nextCol]);
                distance[[nextRow,nextCol]] = Math.min(distance[cur]+1, distance[[nextRow,nextCol]]||10000);
                visited[nextRow][nextCol] = true;
            }
        }
    }
    return distance[[rowLen-1,colLen-1]] || -1;

}