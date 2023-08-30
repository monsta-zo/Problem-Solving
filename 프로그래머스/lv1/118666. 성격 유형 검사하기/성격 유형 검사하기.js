// survey : 각 질문이랑 성격
// choices : 1=>앞3, 2=>앞2, 3=>앞1, 4=>0, 5=>뒤1, 6=>뒤2, 7=>뒤3


function solution(survey, choices) {
    const map = new Map([["R",0],["T",0],["C",0],["F",0],["J",0],["M",0],["A",0],["N",0]]);
    let answer = "";
    
    for(let i=0; i<survey.length; i++){
        if(choices[i]<4){
            let type = survey[i].split("")[0];
            map.set(type, map.get(type)+(4-choices[i]));
        } else {
            let type = survey[i].split("")[1];
            map.set(type, map.get(type)+(choices[i]-4));
        }
    }
    for(let i=0; i<8; i+=2){
        [...map][i][1] < [...map][i+1][1] ? answer += [...map][i+1][0] : answer += [...map][i][0];
    }
    
    return answer;
}