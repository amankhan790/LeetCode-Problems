/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reversed = x.toString().split('').reverse().join('');
    reversed = Number(reversed)
    if (reversed === x) {
        return true
    } else {
        return false
    }
};