function solution(board, moves) {
  const basket = [];
  let result = 0;
  moves.forEach(v => {
      const doll = pickup(board, v-1);
      if(doll){
          if(basket[basket.length-1] === doll){
              basket.pop();
              result +=2;
          }else{
              basket.push(doll);
          }
      }
  });
  return result;
}

function pickup(board, index){
  const newBoard = board;
  for(let i = 0; i < newBoard.length ; i++){
      if(newBoard[i][index] !== 0){
          const doll = newBoard[i][index];
          newBoard[i][index]= 0;
          return doll;
      }
  }
}