// 주어진 숫자들로 만들 수 있는 모든 숫자를 만들어야 한다.

function isPrime(number){
    if(number === "" || number === 0 || number === 1) return false;
    if(number === 2) return true;
    
    for(let i=2; i<=Math.floor(Math.sqrt(number)); i++){
        if(number % i === 0) return false;
    }
    
    return true;
}

function solution(numbers) {
    const numberArr = numbers.split("");
    const length = numberArr.length;
    const visited = Array(length).fill(false);
    let allNum = [];
    
    const generateNumber = (cur) => {
        allNum.push(cur);
        
        for(let i=0; i<length; i++){
            if(!visited[i]){
                visited[i] = true;
                generateNumber(cur+numberArr[i]);
                visited[i] = false;
            }
        }
    }
    
    generateNumber("");
    
    allNum = [...new Set(allNum.map(Number))];
    
    return allNum.filter(num=>isPrime(num)).length;
}