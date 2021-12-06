function solution(s) {

    const tupleMap = s.split('{').join('').split('}').join('').split(',').reduce((acc,idx) => {
        acc.set(idx, (acc.get(idx) || 0 ) + 1);
        
        return acc;
    }, new Map());
    
    let answer = [...tupleMap.entries()].sort((a, b) => b[1] - a[1]).map((x) => {
        return Number(x[0]);
    })
    
    return answer;
    
}