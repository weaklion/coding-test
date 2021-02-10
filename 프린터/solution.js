function solution(priorities, location) {
  let answer = 0;
  let array = priorities.map((v,i)=>({ 
      bool : i === location,    
      val: v                  
  }));

  while(true){
      let target = array.shift();
      if(array.some(t=>t.val > target.val)){       
          array.push(target);                   
      }
      else {                                  
          answer++;                          
          if(target.bool) return answer;          
      }
  }
}