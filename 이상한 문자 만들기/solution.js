function solution(s) {
  let weirdString = s.split(" ").map((x) => x.split("").map((str, index) => {
      if(index % 2 == 0 || index == 0 ) return str.toUpperCase();
      else return str.toLowerCase();
      }).join("")
  ).join(" ");
  
  return weirdString;
}