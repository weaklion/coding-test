function solution(lottos, win_nums) {
  const inter_lottos = lottos.filter(x => win_nums.includes(x)).length;
  const inter_max = inter_lottos + lottos.filter( x => x === 0).length;

  const max = 7 - inter_max >=6 ? 6 : 7 - inter_max;
  const min = 7 - inter_lottos >=6 ? 6: 7 - inter_lottos;
  
  return [max, min]
  
}