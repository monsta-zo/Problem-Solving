// 삼각형 높이 만큼의 배열을 만들어놓고

function solution(triangle) {
    const length = triangle.length;
    const sum = Array.from({length}, ()=>[0]);
    
    sum[0] = triangle[0];
    
    for(let i=1; i<length; i++){
        for(let j=0; j<i; j++){
            sum[i].push(Math.max(sum[i].pop(),sum[i-1][j]+triangle[i][j]));
            sum[i].push(sum[i-1][j]+triangle[i][j+1])
        }
    }
    
    return Math.max(...sum[length-1]);
}