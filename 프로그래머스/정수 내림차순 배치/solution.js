function solution(n) {
    const numberArray =n.toString().split('').map((x) => Number(x));
    
    return Number(numberArray.sort((a,b) => {
        if ( a > b) {
            return -1 ;
        } 
        if (a < b) {
            return 1;
        }
        
        return 0;
    }).join(""));
}