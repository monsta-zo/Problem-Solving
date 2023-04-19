function solution(A, B) {
    let count = 0;
    for(let i=0; i<A.length; i++){
        if(A===B)
            return count;
        A = A.slice(-1) + A.slice(0,A.length-1);
        count++;
    }
    return -1;
    
}