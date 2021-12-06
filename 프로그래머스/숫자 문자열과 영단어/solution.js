function solution(s) {
  const numArray = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let conNum = "";
  let answer = [];
  
  for(let i=0; i<s.length; i ++) {
      if(Number(s[i]) || Number(s[i]) === 0) {
          answer.push(Number(s[i]));
      } else {
          conNum = conNum + s[i];
          if(numArray.includes(conNum)) {
              answer.push(numArray.indexOf(conNum));
              conNum = "";
          }
      }
  }
  return answer.join('') * 1 
}