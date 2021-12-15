function solution(record) {
   
  let answer = [];
  const map = new Map();
  
  for(let i=0; i< record.length; i++) {
      const [state, uid, nickname] = record[i].split(' ');
      
      if(state === 'Leave') {
          answer.push([uid, '님이 나갔습니다.']);
          
          continue;
      }
      
      if(state === 'Enter') {
          answer.push([uid, '님이 들어왔습니다.']);
      }
      
      map.set(uid, nickname);        
  }
  
  return answer.map(el => map.get(el[0]) + el[1])
  
  
}

//uid를 먼저 넣고 뒤에 uid를 text로 바꾼다.