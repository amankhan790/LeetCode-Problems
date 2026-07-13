/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let second = -1;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch >= '0' && ch <= '9') {          
            const digit = Number(ch);
            if (digit > largest) {
                second = largest;               
                largest = digit;
            } else if (digit < largest && digit > second) {
                second = digit;
            }
        }
    }

    return second;
};