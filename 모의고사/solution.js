function solution(answers) {
    const oneSupo =[1,2,3,4,5];
    const twoSupo =[2,1,2,3,2,4,2,5];
    const threeSupo =[3,3,1,1,2,2,4,4,5,5];
    let a=0; let b=0; let c=0;
    answers.forEach(function(value,index) {
        if(oneSupo[index]===value){
            a++;
        } 
        if(twoSupo[index]===value){
            b++;
        } 
        if(threeSupo[index]===value){
            c++;
        } 
        
    });
    
}