// 한 번호가 다른 번호의 접두어인지 확인
// 있으면 false, 없으면 true

// 해시 테이블을 어떻게 이용할 수 있을까?
function solution(phone_book) {
    phone_book.sort((a,b)=>a.length-b.length);
    
    const map = new Map();
    let flag = true;
    
    phone_book.forEach((phone)=>{
        for(let i=0; i<phone.length; i++){
            const sub = phone.substring(0,i+1);
            if(map.has(sub) && map.get(sub) === i+1){
                flag = false;
            }
            else {
                map.set(sub, phone.length);
            }
        }
    })
    return flag;
}