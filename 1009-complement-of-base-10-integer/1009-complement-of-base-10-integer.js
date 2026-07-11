/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    if (n === 0) return 1;
    let mask = 0;
    let num = n;

    while (num !== 0) {
        mask = mask << 1 | 1;
        num = num >> 1;
    }
    return (~n & mask)
};