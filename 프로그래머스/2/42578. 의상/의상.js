// 매일 다른 옷 조합
// 겹치더라도 다른 조합으로 입어야 함
// 각 종류별로 최대 1가지 의상
// 최소 한개의 의상은 입는다

// [이름, 종류] 로 주어짐
// 서로 다른 옷의 조합의 수 return

// 어떤 종류들이 가능할까?
// 만약 안경이 3개
// 상의가 2개라면



function solution(clothes) {
    const map = new Map();
    clothes.forEach(([name, type])=>{
        if(map.has(type)) map.get(type).push(name);
        else map.set(type,[name]);
    })
    let answer = 1;
    
    for(let key of map.keys()){
        answer *= map.get(key).length+1;
    }
    
    return answer-1;
}