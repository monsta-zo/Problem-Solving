function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    const bridge = Array.from(new Array(bridge_length), ()=>0);
    
    answer++;
    bridge.shift();
    let bridge_sum = truck_weights[0];
    bridge.push(truck_weights.shift());
    
    
    while(bridge_sum > 0){
        answer++;
        
        bridge_sum -= bridge.shift();
        
        if(truck_weights.length && bridge_sum + truck_weights[0] <= weight){
            bridge_sum += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else bridge.push(0);
    }
    
    return answer;
}