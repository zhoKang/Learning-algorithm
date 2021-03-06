// 峰值元素是指其值大于左右相邻值的元素。
// 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
// 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
// 你可以假设 nums[-1] = nums[n] = -∞。
// 示例 1:
// 输入: nums = [1,2,3,1]
// 输出: 2
// 解释: 3 是峰值元素，你的函数应该返回其索引 2。
// 示例 2:
// 输入: nums = [1,2,1,3,5,6,4]
// 输出: 1 或 5
// 解释: 你的函数可以返回索引 1，其峰值元素为 2；
//      或者返回索引 5， 其峰值元素为 6。
// 说明:你的解法应该是 O(logN) 时间复杂度的。
/**
 * @param {number[]} nums
 * @return {number}
 */
/*方法一：时间复杂度 O(n) 空间复杂度 O（1） 不满足题目要求，需要更小的时间复杂度的解法*/
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;    // 只有一个元素的情况  极端情况不可漏
    let len = nums.length;
    if (nums[0] > nums[1]) {          // 峰值在首部的情况
        return 0;
    }
    let i = 1;
    while (i < nums.length - 1) {     // 峰值在中间的情况
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
        i++;
    }
    if (nums[len - 1] > nums[len - 2]) {      // 峰值在尾部的情况
        return len - 1;
    }
};
let result = findPeakElement([3,2,1]);
console.log(result, 'jjk')