function solution(s) {
  let zeroCount = 0;
  let loopCount = 0;
  
  while( s !== '1') {
      const tempBinary = [...s].reduce((acc,cur) => {
          if(cur === '0') {
              zeroCount ++;
              return acc;
          }
          return acc + 1;
      },0);
      
      s= tempBinary.toString(2);
      loopCount ++;
  }
  
  return [loopCount,zeroCount] ;
}