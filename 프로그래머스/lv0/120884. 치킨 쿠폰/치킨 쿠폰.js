

function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    while(coupon>=10){
        service += Math.floor(coupon / 10); // 서비스 치킨
        coupon = coupon%10 + Math.floor(coupon / 10);
    }
    return service;
}