// 객체 배열을 이용해야 할듯
// 각 자동차의 누적시간, 입차시간을 저장해두면 좋을듯

function solution(fees, records) {
    const [base, baseFee, unit, unitFee] = fees
    const carArr = {};
    
    records.forEach((record)=>{
       const [time, number, state] = record.split(" ");
       
       if(carArr[number]){
            if(state==="OUT"){
                const [endHour, endMinute] = time.split(":").map(Number);
                const [startHour, startMinute] = carArr[number].start.split(":").map(Number);
                let times = (endHour*60 + endMinute) - (startHour*60 + startMinute);
                carArr[number].times += times;
                carArr[number].start = 0;
            } else {
                carArr[number].start = time;
            }
       } else {
           carArr[number] = {start:time, times:0, fee:0};
       }
    })
    
    for (let number in carArr){
        if(carArr[number].start!==0){
            const [endHour, endMinute] = [23, 59];
            const [startHour, startMinute] = carArr[number].start.split(":").map(Number);
            let times = (endHour*60 + endMinute) - (startHour*60 + startMinute);
            carArr[number].times += times;
            carArr[number].start = 0;
        }
        
        if(carArr[number].times <= base) carArr[number].fee = baseFee;
        else {
            carArr[number].fee = Math.ceil((carArr[number].times-base)/unit)*unitFee + baseFee;
        }
    }
    
    const answer = [];
    
    Object.keys(carArr).sort().forEach(key => {
        answer.push(carArr[key].fee);
    })
    
    return answer;
    
}