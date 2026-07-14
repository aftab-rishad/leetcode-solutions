/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let numLength = new String(nums[i]).length;

        if ((numLength & 1) !== 1) {
            result++
        };

    };
    return result;
};