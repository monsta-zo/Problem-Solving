// H-Index -> 과학자의 생산성, 영향력
// 논문 n편 중, h번 이상 인용된 논문 h편 이상, 나머지가 h번 이하 인용 -> h의 최댓값 -> H-Index

// 생각해보니 꼭 여기 있는 값이 아니어도 된다..

function solution(citations) {
    citations.sort((a,b)=>a-b);
    let start = 0;
    let end = citations[citations.length-1];
    
    let answer = 0;
    while(start<=end){
        let mid = parseInt((start+end)/2);
        
        if(citations.filter((c)=>c>=mid).length >= mid){
            answer = Math.max(answer,mid);
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    
    return answer;
    
}