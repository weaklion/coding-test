function solution(s)
{
    let temp = '';
    let tempString = s.split('');
    let tempStack = [];
    
    for(let i=0; i< s.length; i++) {
        if(tempStack[tempStack.length-1] === s[i]) {
            tempStack.pop();
        }
        else {
            tempStack.push(s[i]);
        }
    }
    return tempStack.length === 0 ? 1 : 0;
}