function solution(n)
{
    const answer = n.toString().split("").reduce((acc, cur) => {
        return acc + Number(cur);
    },0);
    
    return answer;
    
}