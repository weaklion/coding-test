function solution(n, lost, reserve) {

  let setArray = [];
  for(let i= 1 ; i<=n ; i++){ //lost, reserve에 체육복 추가 및 제거
      setArray.push(1);
      if(reserve.includes(i)) {
          setArray[i-1] ++
      } 
      if(lost.includes(i)) {
          setArray[i-1] --
      }
  }
  
  for(let i=0; i< n ; i ++) {
      if(!setArray[i]) { // setArray[i]==0
          if(setArray[i -1] ==2) {
              setArray[i] ++;
              setArray[i-1] --;
              
          } else if ( setArray[i +1] == 2) {
              setArray[i] ++;
              setArray[i+1] --;
          }
      } 
  }
  
  const answer  = setArray.filter((x) => {
      return x >= 1
  }).length
  
  return answer;
}