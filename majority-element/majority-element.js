/**
 * @param {number[]} nums
 * @return {number}
 
 Given an array nums of size n, return the majority element.
 The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
 Example 1: Input: nums = [3,2,3] / Output: 3
 */

var majorityElement = function(nums) {
    let obj = {}
    for (let i = 0 ; i < nums.length ; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 0
        }
        obj[nums[i]] += 1
    }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
};
