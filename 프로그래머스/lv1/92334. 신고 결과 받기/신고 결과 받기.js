function solution(id_list, report, k) {
    report = [...new Set(report)]

    const reporter = new Map();
    const answer = new Map();
    
    report.forEach((r, index)=>{
        const [user, badUser] = r.split(" ");
        if(!reporter.get(badUser)) reporter.set(badUser, [user]);
        else reporter.set(badUser, [user,...reporter.get(badUser)]);
        
    })
    
    for(const key of reporter.keys()){
        if(reporter.get(key).length>=k){
            reporter.get(key).forEach(r=>{
                answer.set(r,(answer.get(r)||0)+1);
            })
        }
    }
    
    return id_list.map((id)=>answer.get(id)||0)
}