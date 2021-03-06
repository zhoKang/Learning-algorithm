// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
//
// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
//
// 说明:
//
//     返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:
//
//     输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length;
    let left = Math.floor(len / 2);
    let right = len - 1;
    while(left < len) {
        let rightV = target - numbers[left];
        right = numbers.indexOf(rightV, left + 1); // 此处需注意左右索引不可以相同，故找右边索引的起始索引要加1
        if (right < 0 || left === right) {
            left--;
        } else {
            break;
        }
    }
    return [left + 1, right + 1];
};
var twoSum2 = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let currSum = numbers[left] + numbers[right];
        if (currSum < target) {
            left++;
        } else if (currSum > target) {
            right--;
        } else {
            break;
        }
    }
    return[left + 1, right + 1];
};
let result = twoSum2([2, 7, 11, 15], 9);
console.log(result);
