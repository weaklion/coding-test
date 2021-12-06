function solution(n) {
    const binary = n.toString(2).split('').filter(x => x === '1').length;
    let answer = n;
    while(true) {
        answer ++;
        if(binary === answer.toString(2).split('').filter(x => x === '1').length) {
            return answer;
        }
    }
}