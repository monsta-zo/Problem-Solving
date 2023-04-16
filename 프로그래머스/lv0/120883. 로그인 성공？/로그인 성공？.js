function solution(id_pw, db) {
    let result = "fail";
    db.forEach(d=>{
        if(JSON.stringify(id_pw) === JSON.stringify(d))
            result = "login"
        else if(id_pw[0]===d[0])
            result = "wrong pw"
    })
    return result;
}