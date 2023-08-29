const KEYPAD = {1:[0,0], 2:[0,1], 3:[0,2], 4:[1,0], 5:[1,1], 6:[1,2], 7:[2,0], 8:[2,1], 9:[2,2], "*":[3,0], 0:[3,1], "#":[3,2]};

function calcDist(cur, target){
    return Math.abs(cur[0]-target[0]) + Math.abs(cur[1]-target[1]);
}

function solution(numbers, hand) {
    
    let left = KEYPAD["*"];
    let right = KEYPAD["#"];
    
    let result = "";
    
    numbers.forEach((num)=>{
        if(num===1 || num ===4 || num===7){
            result += "L";
            left = KEYPAD[num];
        }
        else if(num===3 || num ===6 || num===9){
            result += "R";
            right = KEYPAD[num];
        }
        else {
            let leftDist = calcDist(left, KEYPAD[num]);
            let rightDist = calcDist(right, KEYPAD[num]);
            
            if(leftDist===rightDist){
                if(hand==="left"){
                    result+="L";
                    left = KEYPAD[num];
                }
                else {
                    result+="R";
                    right=KEYPAD[num];
                }
            }
            else if(leftDist < rightDist){
                result+="L";
                left = KEYPAD[num];
            }
            else {
                result+="R";
                right = KEYPAD[num];
            }
        }
    })
    
    return result;
}