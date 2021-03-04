function solution(arr) {
    const min = Math.min(...arr);
    
    const answer = arr.reduce((acc, cur) => {
        if(cur > min) {
            acc.push(cur);
        }
            return acc;
    },[])
    
    if(answer.length === 0 ) {
        answer.push(-1);
    }
    
    return answer;
}