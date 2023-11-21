// 수포자 삼인방
// 1 -> 1,2,3,4,5.. 반복
// 2 -> 2,1,2,3,2,4,2,5,... 반복
// 3 -> 33,11,22,44,55,.. 반복

function solution(answers) {
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    
    const score = [0,0,0];
    let answer = [];
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === one[i%5]) score[0]++;
        if(answers[i] === two[i%8]) score[1]++;
        if(answers[i] === three[i%10]) score[2]++;
    }
    let max = -1;
    for(let i=0; i<3; i++){
        if(score[i] > max){
            max = score[i];
            answer = [i+1];
        }
        else if (score[i] === max){
            answer.push(i+1);
        } 
    }
    
    return answer;
    
}