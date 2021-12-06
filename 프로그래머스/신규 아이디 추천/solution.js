function solution(new_id) {
    
  const answer = new_id
  .toLowerCase()
  .replace(/[^0-9a-z\-\_\.]/g,'')
  .replace(/\.{2,}/g,'.')
  .replace(/^\.|\.$/g, '')
  .replace(/^$/, 'a')
  .slice(0,15).replace(/\.$/, '');

  const len = answer.length;
  
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}