function solution(arr) {
    const front = arr.indexOf(2);
    const back = arr.lastIndexOf(2);
    if(front===-1)
        return [-1];
    return arr.slice(front,back+1);
}