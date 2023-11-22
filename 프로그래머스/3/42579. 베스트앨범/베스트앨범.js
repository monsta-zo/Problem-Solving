// 장르별 가장 많이 재생된 노래 두 개씩 모아 베스트 앨범
// 노래 -> 고유 번호
// 수록 기준
// 1. 속한 노래가 많이 재생된 장르 먼저
// 2. 장르 내에서 많이 재생된 노래 먼저
// 3. 재생 횟수 같으면 고유 번호 낮은 노래 먼저

// genres -> i가 고유번호 장르 종류
// plays -> 각 i의 재생 수

// 앨범 노래 순서

function solution(genres, plays) {
    const map = new Map();
    
    genres.map((genre,i)=>{
        if(!map.has(genre)){
            map.set(genre, [i,null,plays[i]]);
        } else {
            const genreArr = map.get(genre);
            genreArr[2] += plays[i];
            if(plays[i] > plays[genreArr[0]]){
                genreArr[1] = genreArr[0];
                genreArr[0] = i;
            } else if(genreArr[1] === null) genreArr[1] = i; 
            else if(plays[i]>plays[genreArr[1]]){
                genreArr[1] = i;
            }
        }
    })
    console.log(map);
    let answer = [];
    
   Array.from(map.values()).sort((a,b)=>b[2]-a[2]).map((song)=>{
        song.pop();
        answer.push(...song);
    })
    
    return answer.filter((num)=>num!==null);
}