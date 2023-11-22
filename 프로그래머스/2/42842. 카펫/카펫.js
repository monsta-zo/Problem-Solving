// 테두리 1줄이 갈색으로 칠해져있음, 나머지는 노란색

function solution(brown, yellow) {
    let WH = (brown-4)/2;
    
    let height = 1;
    let width = WH-height;
    
    while(true){
        if(width*height === yellow) break;
        width-=1;
        height+=1;
    }
    
    return [width+2, height+2];
}