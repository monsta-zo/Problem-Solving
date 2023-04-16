

function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    while(coupon>=10){
        service += Math.floor(coupon / 10); // 서비스 치킨
        let remain = coupon % 10;
        coupon = remain + Math.floor(coupon / 10);
    }
    return service;
}