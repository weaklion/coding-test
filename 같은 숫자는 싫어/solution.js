function solution(arr)
{
   
    
    return arr.filter((x,idx) => {
       return x != arr[idx + 1]
    });
}