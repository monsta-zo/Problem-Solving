// 한 번호가 다른 번호의 접두어인지 확인
// 있으면 false, 없으면 true

// 해시 테이블을 어떻게 이용할 수 있을까?
function solution(phone_book) {
    const map = new Map();
    let flag = true;
    
    phone_book.forEach(phone=>map.set(phone));
    
    phone_book.forEach(phone=>{
        for(let i=0; i<phone.length-1; i++){
            if(map.has(phone.substring(0,i+1)))
                flag=false;
        }
    })
    return flag;
}