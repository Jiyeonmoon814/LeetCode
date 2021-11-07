/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n===1){
        return 1
    }else if(n===2){
        return 2
    }
    
    //if n is 0, if n is 1, otherwise
    let way = [1,2]

    for(let i=2;i<n;i++){
        //fibo(n-1) + fibo(n-2)
        way.push(way[i-1] + way[i-2])
    }
    
    return way.pop()
};