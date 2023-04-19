function solution(num, total) {
    let sum = 0;
    for(let i=0; i<num; i++)
        sum += i;
    
    return new Array(num).fill((total-sum)/num).map((el,i)=>el+i);
    
}