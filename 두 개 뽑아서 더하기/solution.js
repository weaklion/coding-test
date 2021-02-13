function solution(numbers) {
  const set = new Set();

  for(let i =0; i<numbers.length-1; i++){
    for(let k=i+1; k<numbers.length; k++) {
      let sum = numbers[i] + numbers[k];
      set.add(sum);
    }
  }

  const answer = Array.from(set);

  answer.sort((a,b) => a-b);

  console.log(answer);

  return answer;
}