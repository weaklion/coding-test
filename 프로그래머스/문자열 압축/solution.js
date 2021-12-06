function solution(s) {
  let strLength = [];
  
  for(let i=0; i< s.length / 2 ; i++) {
      let count = 1;
      let number = i+1; 
      let newStr = "";
      for(let j=0 ; j <s.length ; j =j + number) {
          const prev = s.substring(j, j+number);
          const next = s.substring(j+number, j+number + number);
          if(prev == next) {
              count ++;
          } else {
              if( count !== 1) {
                  newStr = newStr + count + prev ;
                  count = 1;
              } else {
                  newStr = newStr + prev;    
              }
          }
      }
      strLength.push(newStr.length);
      
  }
  return Math.min(...strLength);
}