/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    const result = sign * parseInt(reversedStr, 10);

    const INT_MAX = 2 ** 31 - 1;   // 2147483647
    const INT_MIN = -(2 ** 31);    // -2147483648

    if (result > INT_MAX || result < INT_MIN) {
        return 0;
    }

    return result;
};