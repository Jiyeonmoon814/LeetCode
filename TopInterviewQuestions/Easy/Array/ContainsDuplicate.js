/**
  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
  Example 1:
  Input: nums = [1,2,3,1]
  Output: true

  Example 2:
  Input: nums = [1,2,3,4]
  Output: false

 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b)
    
    for(i=1;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            return true
        }
    }
    
    return false
};