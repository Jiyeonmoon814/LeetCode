/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
 */

var searchRange = function(nums, target) {
    const index = []
    const find = nums.filter(num => num === target)
    
    if(find.length === 0 || nums.length === 0){
        return [-1, -1]
    }else{
        const filterArr = nums.filter(num => num <= target)
    
        for(i=0;i<filterArr.length;i++){
            if(filterArr[i]===target){
                index.push(i)
            }
        }

        return [index[0], index[index.length-1]]   
    }
};
