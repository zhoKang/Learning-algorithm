// 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。
// 示例:
//     输入:
//         [1,2,3]
// 输出:
//     3
// 解释:
//     只需要3次移动（注意每次移动会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let len = nums.length;
    nums = nums.sort((a, b) => a - b);
    let res = 0;
    if (nums[0] === nums[len - 1]) return res;
    for (let i = 1; i < len; i++) {
        res += nums[i] - nums[0];
    }
    return res;
};
let result = minMoves([1,2,3]);
console.log(result);