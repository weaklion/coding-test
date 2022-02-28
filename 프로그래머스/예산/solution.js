function solution(d, budget) {
  const asd = d.sort((a,b) => a - b);
  let answer = 0;
  
  for(let i=0; i<asd.length; i++) {
      budget = budget - asd[i];
       if(budget < 0) {
          break;
      }
      answer ++;
     
  }
  
 return answer;
}