/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 
 ** Think about 
 1.Did u use the fact that the order of elements can be changed?
 2.What happens when the elements to remove are rare?
 */
var removeElement = function(nums, val) {
    let i = 0;
    // note that the last element that was swapped in could be the value you want to remove itself.
    // But dw, in the next iteration we'll still check this element 
    while(i<nums.length){
        if(nums[i] === val){
            nums.splice(i,1)
        }else{
            i++
        }
    }
    
    return nums.length
};
