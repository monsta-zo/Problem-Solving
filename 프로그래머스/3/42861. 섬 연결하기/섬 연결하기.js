// n개의 섬 사이 다리 건설 비용
// 최소 비용 모든 섬 통행 가능
// 최소 신장 트리
// [섬1,섬2,비용]

// 그냥 싼것부터 지으면 됨
// 전부다 연결됐는 지 확인하는 방법 필요
// 사이클이 발생하는 지 확인? -> union-find 알고리즘 사용

function getParent(parents, child){
    if(parents[child] === child) return child;
    return parents[child] = getParent(parents, parents[child]);
}

function unionParent(parents,start,end){
    const startParent = getParent(parents, start);
    const endParent = getParent(parents, end);
    if(startParent < endParent) parents[endParent] = startParent;
    else parents[startParent] = endParent;
}

function isSameParent(parents,start,end){
    if(getParent(parents, start) === getParent(parents, end)) return true;
    else return false;
}


function solution(n, costs) {
    costs.sort((a,b)=>a[2]-b[2]);
    
    let answer = 0;
    let parents = Array.from({length:n}, (v,idx)=>v=idx);
    
    for(let i=0; i<costs.length; i++){
        const [start,end,cost] = costs[i];
        if(!isSameParent(parents,start,end)){
            answer+=cost;
            unionParent(parents,start,end);
        }
    }
    return answer;
}