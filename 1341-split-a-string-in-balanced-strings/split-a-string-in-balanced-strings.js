/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0; //1
    let balanced = 0; //1, 2, 3, 4, 3, 2, 1,  0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            balanced++;
        } else {
            balanced--;
        }

        if (balanced === 0) {
            count++;
        }
    }
    return count;
};