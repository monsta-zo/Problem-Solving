// 각 팀에서 팀장을 포함하는 경우 or 포함하지 않는 경우
//// 1. 포함하는 경우
// 팀장 매출액 + 아래 팀장들 포함하든 안하든 최솟값의 합
//// 2. 포함하지 않는 경우
// 아래에서 한명씩 무조건 포함시키고 나머지 포함 하든 안하든 의 합



function solution(sales, links) {
    const teams = Array.from(Array(sales.length+1), ()=>[]);
    const minSales = Array.from(Array(sales.length+1), ()=>Array(2).fill(null))
    
    for(let link of links){
        teams[link[0]].push(link[1]);
    }
    
    // 포함 O -> 0, 포함 X -> 1
    const setMinSales = (curNode, isInclude) => {
        if(!teams[curNode].length){
            minSales[curNode][0] = sales[curNode-1]
            minSales[curNode][1] = 0;
            return minSales[curNode][isInclude];
        }
        
        if(minSales[curNode][isInclude]!==null){
            return minSales[curNode][isInclude];
        }
        
        
        // 포함하는 경우
        if(!isInclude){
            let childSum = 0;
            for(let i=0; i<teams[curNode].length; i++){
                childSum += Math.min(setMinSales(teams[curNode][i],0), setMinSales(teams[curNode][i],1));
            }
            minSales[curNode][isInclude] = sales[curNode-1] + childSum;
            return sales[curNode-1] + childSum;
        }
        else {
            let tempMin = Infinity;
            for(let i=0; i<teams[curNode].length; i++){
                let childSum = setMinSales(teams[curNode][i],0);
                for(let j=0; j<teams[curNode].length; j++){
                    if(j!==i){
                        childSum += Math.min(setMinSales(teams[curNode][j],0), setMinSales(teams[curNode][j],1))
                    }
                }
                tempMin = Math.min(tempMin, childSum);
                minSales[curNode][isInclude] = tempMin;
            }
            return tempMin;
        }
    
    }
    return Math.min(setMinSales(1,0),setMinSales(1,1));
}