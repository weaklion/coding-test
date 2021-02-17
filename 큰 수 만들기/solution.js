function solution(number, k) {
  const stack = [];
  for(let i=0;i <number.length; i++) {
      const num = number[i];
      
      while(k > 0 && stack[stack.length -1] < num) {
          stack.pop();
          k--;
      }
      
      stack.push(num);
  }
   
   stack.splice(stack.length-k,k);
   
   return stack.join("");
   
       
}