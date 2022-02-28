function solution(N, stages) {
  let fail = []; // 실패할 확률이 들어갈 배열.
  let players = stages.length;

  
  for(let i=0; i<N ; i++) {
      let notClear = stages.filter(el => el === i + 1).length;
      let failRate = 0;
      
      if(notClear === 0) {
          failRate = 0;
      } else {
          failRate  = notClear / players;
      }
      
      players -= notClear ; 
      
      fail.push({stage : i+1 , failRate : failRate })
  }
  
  fail.sort((a, b) => {
      if( a.failRate !== b.failRate ) {
          return b.failRate - a.failRate
      } else {
          return a.failRate - b.failRate
      }
  })
  
 return fail.map(el => el.stage)
}