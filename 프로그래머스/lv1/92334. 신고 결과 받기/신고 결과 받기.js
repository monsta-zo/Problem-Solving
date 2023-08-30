function solution(id_list, report, k) {
    report = [...new Set(report)]

    const reporter = new Map();
    const times = new Map();
    
    report.forEach((r, index)=>{
        const [user, badUser] = r.split(" ");
        times.set(badUser, (times.get(badUser)||0)+1);
        if(!reporter.get(user)) reporter.set(user, [badUser]);
        else reporter.set(user, [badUser,...reporter.get(user)]);
    })
    
    return id_list.map((id)=>{
        return reporter.get(id)?reporter.get(id).filter((badUser=>times.get(badUser)>=k)).length:0
    })
}