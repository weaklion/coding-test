function solution(n) {
    let quotient = n;
    let reverse3 = [];
    while(quotient >= 3) {
        reverse3.push(quotient %3);
        quotient = parseInt(quotient / 3);
    }
    reverse3.push(quotient);
    
    let squared = 1;
    let result = 0;
    
    while(reverse3.length != 0) {
        const pop = reverse3.pop();
        result = result + pop * squared ;
        squared = squared * 3;
    }
    
    return result;
}