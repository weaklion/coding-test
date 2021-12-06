function solution(p) {
    
  let answer = '';
  let left = 0; // 현재 '(' 개수
  let right = 0;  // 현재 ')' 개수
  let check = true;  //올바른 괄호 문자열 체크
  
  
  
  if(p.length == 0) {
      return '';
  }
  
  for(let i =0; i < p.length ; i ++ ) {
      
      if(p[i] === '(') {
          left ++;
      }
      if(p[i] === ')') {
          right++;
      }
      
      if( right > left)  {
          check = false; // right > left == 올바른 문자열이 아니다 
      }
          
      if(left === right) {
          
          if(check == false ) {
              answer += '(';
              answer += solution(p.slice(i + 1 , p.length)); // v
              answer += ')';
              for (let j =1; j<i ; j++) {
                  if(p[j] == '(') answer += ')';
                  if(p[j] == ')') answer += '(';
              }
              return answer ; 
          } else {
              answer += p.slice(0, i + 1);
              answer += solution(p.slice( i+ 1, p.length)) //v
              return answer;
          }
      }
  }
}