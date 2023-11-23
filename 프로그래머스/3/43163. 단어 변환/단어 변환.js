// begin -> target
// words에 있는 단어로만 변경 가능
// 한번에 한 글자만 변경 가능 -> 이걸 어떻게 만들 것이냐

// 최소 몇단계만에 변경할 수 있는지

function diffCount(cur, next) {
    return [...cur].filter((v,idx)=>v!==[...next][idx]).length;
}

function solution(begin, target, words) {
    let answer = 51;

    const visited = Array(words.length).fill(false);
    
    const dfs = (cur, count) => {
        if(cur === target){
            answer = Math.min(answer,count);
            return;
        }
        
        words.map((word,idx)=>{
            if(!visited[idx] && diffCount(cur,word)===1){
                visited[idx] = true;
                dfs(word,count+1);
                visited[idx] = false;
            }
        })
    }
    
    dfs(begin,0);
    
    return answer===51?0:answer;
}