// 각 문자열에 "aya", "ye", "woo", "ma"가 온전히 등장해야한다
// 문자열을 일일히 검사하는 것 보다 정규표현식을 사용하는 것이 편할것 같다

function solution(babbling) {
    let count = 0;
    babbling.forEach(b=>{
        if(b.replaceAll(/aya|ye|woo|ma/g,"")==="")
            count++;
    })
    return count;
}