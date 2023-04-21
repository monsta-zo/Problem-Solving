function solution(n, lost, reserve) {
    const students = new Array(n).fill(0);
    lost.forEach(student=>{
        students[student-1] -= 1;
    })
    reserve.forEach(student=>{
        students[student-1] += 1;
    })
    
    students.forEach((student,i,arr)=>{
        if(student===-1){
            if(arr[i-1]===1&&arr[i+1]!==1){
                arr[i]++;
                arr[i-1]--;
            }
            if(arr[i-1]!==1&&arr[i+1]===1){
                arr[i]++;
                arr[i+1]--;
            }
        }
    })
    students.forEach((student,i,arr)=>{
        if(student===-1){
            if(arr[i-1]===1&&arr[i+1]!==1){
                arr[i]++;
                arr[i-1]--;
            }
            if(arr[i-1]!==1&&arr[i+1]===1){
                arr[i]++;
                arr[i+1]--;
            }
            if(arr[i-1]===1&&arr[i+1]==1){
                arr[i]++;
            }
        }
    })
    
    return n - students.filter(student => student===-1).length;
    
}