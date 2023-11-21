function solution(bridge_length, weight, truck_weights) {
    let bridge_weight = 0;
    const bridge = new Array(bridge_length).fill(0);
    let answer = 0;
    
    do{
        answer++;
        bridge_weight -= bridge.shift();
        if(bridge_weight+truck_weights[0]<=weight){
            bridge_weight += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }
    }while(bridge_weight>0)
    
    return answer;
}