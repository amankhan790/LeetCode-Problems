/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Base case: an array of 0 or 1 elements is already sorted
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, mid));   // recursively sort left half
    const right = sortArray(nums.slice(mid));      // recursively sort right half

    return merge(left, right);
};

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare front elements of each half, push the smaller one
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // One half may still have leftover elements — append them as-is
    // (they're already sorted, and guaranteed >= everything already in result)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}