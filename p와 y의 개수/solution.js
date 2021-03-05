function solution(s){
    const pArray = s.toLowerCase().split('').filter((x) => {
        return x == 'p'
    }).length
    const yArray = s.toLowerCase().split('').filter((x) => {
        return x  == 'y'
    }).length;
    
    const answer = pArray == yArray;
    return answer;
}