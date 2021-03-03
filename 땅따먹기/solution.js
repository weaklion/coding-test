function solution(land) {
    var answer = 0;
    var len = land.length;
    
    for(var i =len-2; i>=0; i--){
      land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
      land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
      land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
      land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
   } // DP 활용 (어려우니까 한번 더 풀어보기)
   answer = Math.max(...land[0]); 
  
  
      return answer;
  }