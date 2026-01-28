/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sortedStr1 = s.split("").sort().join("");
    const sortedStr2 = t.split("").sort().join("");
    if (sortedStr1 === sortedStr2) {
        return true
    } else {
        return false
    }
};