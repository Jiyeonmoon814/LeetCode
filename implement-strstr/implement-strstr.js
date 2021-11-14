/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return needle.length < 1 ? 0 : haystack.includes(needle) ? haystack.split(needle)[0].length : -1 
};