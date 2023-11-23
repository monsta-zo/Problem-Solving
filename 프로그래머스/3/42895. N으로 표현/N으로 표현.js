function solution(N, number) {
    const result = Array.from({length:9}, ()=>[]);
    
    result[1] = [N];
    
    const calcNum = (count) => {
        if(result[count].length) return result[count];
        
        for(let i=1; i<=parseInt(count/2); i++){
            const left = result[i];
            const right = result[count-i];
            
            result[count].push(Number(`${N}`.toString().repeat(count)));
            for(let j=0; j<left.length; j++){
                for(let k=0; k<right.length; k++){
                    result[count].push(left[j]+right[k]);
                    result[count].push(left[j]-right[k]);
                    result[count].push(right[k]-left[j]);
                    result[count].push(left[j]*right[k]);
                    result[count].push(parseInt(left[j]/right[k]));
                    result[count].push(parseInt(right[k]/left[j]));
                }
            }
        }
    }
    
    for(let i=1; i<=8; i++){
        calcNum(i);
        if(result[i].includes(number)) return i;
    }
    return -1;
}