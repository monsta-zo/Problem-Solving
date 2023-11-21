function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    let cardNum = sizes.length;
    
    sizes.forEach(size=>{
        if(size[0] < size[1]){
            let temp = size[0];
            size[0] = size[1];
            size[1] = temp;
        }
    })
    
    for(let i=0; i<cardNum; i++){
        maxWidth = Math.max(sizes[i][0], maxWidth);
        maxHeight = Math.max(sizes[i][1], maxHeight);
    }
    
    return maxWidth * maxHeight;
}