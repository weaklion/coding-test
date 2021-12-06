function solution(skill, skill_trees) {
  const arr = skill.split("");
  let count =0;
  let str = 0;
  for(let i=0; i<skill_trees.length; i++) {
      str = skill_trees[i].split("").filter((x) => {
          return arr.includes(x)
      }).join("");
      if(str === skill.substring(0, str.length)) {
      count ++;
  }
  }
  
  return count;
}