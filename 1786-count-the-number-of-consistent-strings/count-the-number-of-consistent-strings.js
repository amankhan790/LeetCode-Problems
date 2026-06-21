/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let set = new Set(allowed); 
    let count = 0; 

    for (let i = 0; i < words.length; i++) {
        let valid = true;

        for (let j = 0; j < words[i].length; j++) {
            if (!set.has(words[i][j])) {
                valid = false;
                break;
            }
        }

        if (valid) {
            count++;
        }
    }

    return count;
};