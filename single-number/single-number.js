/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(i=0;i<nums.length;i++){
        const count = nums.filter(num => num === nums[i])
        
        if(count.length === 1){
            return nums[i]
        }
    }
};