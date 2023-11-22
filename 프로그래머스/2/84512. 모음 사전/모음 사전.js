function solution(word) {
    const alphabet = ["A", "E", "I", "O", "U"]
    const words = [];
   
    const generateWord = (cur) => {
        words.push(cur);
        if(cur.length===5) return;
        
        for(let i=0; i<5; i++){
            generateWord(cur+alphabet[i]);
        }
    }
    
    generateWord("");
    
    return words.indexOf(word);
}