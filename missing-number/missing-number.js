/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsLength = nums.length 
    
    const sumShouldBe = numsLength * (numsLength + 1) / 2 
    
    const currentSum = nums.reduce((a,b) => a+b,0)
    
    return sumShouldBe - currentSum
    
};
