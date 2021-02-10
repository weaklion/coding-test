function solution(progresses, speeds) {
    var answer = [];
        
    while( progresses.length !== 0  && speeds.length !==0 ) {
        let count = 0;

        for(let i=0; i<progresses.length ; i++) {
            progresses[i] = progresses[i] + speeds[i];    
        }
        if(progresses[0] >= 100) {
            count = 1;
            progresses.shift();
            speeds.shift();
            for(let k=0; k<progresses.length; k++) {
                if(progresses[k] >= 100) {
                    count ++;
                    progresses.shift();
                    speeds.shift();
                    k= k -1;
                } else {
                    break;
                }
            }
        }
         if(count > 0 ) answer.push(count);
    }
    return answer;
}