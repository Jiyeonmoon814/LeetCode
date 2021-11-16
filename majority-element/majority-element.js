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
 
    // The Object.keys() method returns an array of a give object's own enumerable property names, 
    // literated in the same order that a normal loop would 
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
   // reduce(prevValue, currValue => smth with prev and curr ) 
   // The reduce() method executes a user-supplied "reducer" callback function on each elemenbt of the array. 
   // Passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array in a single value. 
   // The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step 
   // (this result is the running sum of all the previous steps) until there are no more elements to add 
};
