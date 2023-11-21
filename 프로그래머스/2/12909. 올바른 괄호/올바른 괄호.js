// 왜 시간초과가 날까? 현재 O(N) 인데 이보다 더 단축할 수 있을까?

function solution(s){
    let count = 0;
   for(let char of s){
       if(char === "(") count++;
       else count --;
       if(count < 0) return false;
   }
    if(count > 0) return false;
    return true;
}