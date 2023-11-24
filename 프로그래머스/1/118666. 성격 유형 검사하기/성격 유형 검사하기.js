// 성격 유형 검사지
// R, T
// C, F
// J, M
// A, N
// n개의 질문 , 각 질문 1가지 지표 판단
// 3 2 1 0 1 2 3
// 모든 질문 유형 점수 더해서 더 높은 유형이 성격
// 같으면 사전 순으로 빠른 성격 유형

// RT 앞이 비동의 뒤가 동의
// 1~7
// 1이면 R 3점 ...

// 각 유형의 점수를 매겨놔야 함 -> 매핑 테이블
function solution(survey, choices) {
    const length = survey.length;
    const map = new Map([["R",0],["T",0],["C",0],["F",0],["J",0],["M",0],["A",0],["N",0]]);
                    
    for(let i=0; i<length; i++){
        const test = survey[i];
        const score = choices[i];
        
        if(score < 4) map.set(test[0], map.get(test[0])+(4-score));
        else if(score > 4) map.set(test[1], map.get(test[1])+(score-4));
    }
    
    let answer = "";
    let result = Array.from(map.entries());
    console.log(result);
    for(let i=0; i<8; i+=2){
        if(result[i][1] >= result[i+1][1]) answer += result[i][0];
        else answer += result[i+1][0];
    }
    
    return answer;
    
}