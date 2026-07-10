/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false;
    }

    while (n !== 0) {
        let lastBit = n & 1;
        n = n >> 1;
        if (lastBit === 1 && n !== 0) {
            return false;
        }
    }
    return true;
};