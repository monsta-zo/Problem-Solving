function solution(score) {
    const map = new Map();
    const result = [...score];
    score.sort((a,b)=>{
        return (b[0]+b[1])/2-(a[0]+a[1])/2
    })
    map.set(score[0],1);
    for(let i=2; i<=score.length; i++){
        if((score[i-1][0]+score[i-1][1])/2===(score[i-2][0]+score[i-2][1])/2)
            map.set(score[i-1],map.get(score[i-2]));
        else
            map.set(score[i-1],i);
    }
    
    return result.map(v=>map.get(v)); 
}