function solution(i, j, k) {
    let count = 0;
    regexp = new RegExp(`${k}`,"g")
    for(let index=i; index<=j; index++){
        const match = index.toString().match(regexp);
        if(match)
            count+=match.length;
    }
    return count;
}