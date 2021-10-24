/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'') //removed blanks 
    
    let res = s.split('').reverse().join('')
    // split sentences by each alphabet and get it reversed 
    // and returns a new string by concatenating all of the elements
    
    return res.toLowerCase() === s.toLowerCase()
    
};