function solution(a, b) {
    let i = 2;
    while(i<=b){
        if(b%i===0){
            if(i===2 || i===5){
                b/=i;
            }
            else{
                if(a%i===0){
                    a/=i;
                    b/=i;
                }
                else{
                    return 2;
                }
            }
        }
        else{
            i++;
        }
    }
    return 1;
}