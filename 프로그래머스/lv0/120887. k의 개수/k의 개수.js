function solution(i, j, k) {
    let count = 0;
    for(let index=i; index<=j; index++){
        count += index.toString().split(k).length-1;
    }
    return count;
}