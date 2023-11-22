function solution(numbers) {
    numbers.sort((a,b)=>{
        let one = a.toString()+b.toString();
        let two = b.toString()+a.toString();
        if(Number(one) > Number(two)) return -1;
        else return 1;
    })
    if(numbers.every(number=>number===0)) return "0";
    return numbers.join("");
}