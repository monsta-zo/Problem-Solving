function solution(common) {
    let commonNum = common[1]-common[0];
    let flag = common.every((el,i,arr)=>{
        if(i===0)
            return true;
        if(arr[i-1]+commonNum === arr[i])
            return true;
        else
            return false;
    })?"minus":"multi";
    if(flag==="multi"){
        console.log("Here");
        commonNum = common[1]/common[0]
    };
    console.log(flag, commonNum);
    return flag==="minus"?common[common.length-1]+commonNum:common[common.length-1]*commonNum
    
}