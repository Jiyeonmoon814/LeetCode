/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest = strs.reduce((prev,curr) => curr.length < prev.length ? curr : prev)
    // need to get the shortest word 
    
    while(shortest.length) {
        const flag = strs.every(item => item.startsWith(shortest))
        
        if(flag) break
        
        shortest = shortest.slice(0,shortest.length - 1)
        //while loop through, the shortest will be sliced by one letter from the end 
        //e.g ) flow > flo > fl > f till break the loop 
        
    }
    
    return shortest
};