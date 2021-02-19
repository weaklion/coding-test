function solution(n) {
    
    let count = 0;
    
    for(let i=1; i<=n; i++) {
        let sum =0;
        for(let k=i ; k<=n; k++) {
            sum = sum + k;
            if(sum == n) {
                count++;
                break;
            }
            if ( sum > n) {
                break;
            }
        }
    }
    console.log(count);
    return count;
}