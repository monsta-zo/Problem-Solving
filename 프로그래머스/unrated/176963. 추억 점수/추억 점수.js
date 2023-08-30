// name : 그리워하는 사람의 이름
// yearning : 각 사람의 그리움 점수
// photo : 각 사진에 찍힌 인물의 이름 2차원 배열

// 각 사진의 추억점수를 배열에 담아 반환

// 각 사람의 그리움 점수를 Map에 저장하고
// 배열 돌면서 계산해서 반환

function solution(name, yearning, photo) {
    const map = new Map();
    const answer = [];
    
    for(let i=0; i<name.length; i++){
        map.set(name[i], yearning[i]);
    }
    
    photo.forEach((p)=>{
        let score = 0;
        p.forEach((person)=>{
            score += map.get(person)||0;
        })
        answer.push(score);
    })
    
    return answer;
}