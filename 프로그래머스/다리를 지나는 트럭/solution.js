function solution(bridge_length, weight, truck_weights) {
    
    let time = 0; //시간
    let queueSum = 0; //다리 무게
    let queue = []; //다리
   
    for(let i =0 ; i<bridge_length; i++) {
        queue.push(0); //다리에 0을 넣어줌
    }
    
    let now_truck = truck_weights.shift(); 
    
    queue.pop();
    queue.unshift(now_truck);
    
    queueSum += now_truck;
    
    time++;
    
    while(queueSum) {
        queueSum -= queue.pop();
        
        now_truck = truck_weights.shift();
        
        if(now_truck+queueSum <= weight) {
            queue.unshift(now_truck);
            queueSum += now_truck ;
        }
        else {
            queue.unshift(0);
            truck_weights.unshift(now_truck);
        }
        time++;
    }
    
    return time;
}