// 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
//
// 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

// 时间复杂度：O（n2）
// 空间复杂度：O（1）
// 稳定性：稳定

let insertSort = function (array) {
    for (let i = 1; i < array.length; i++) {
        let target = i;
        for (let j = i - 1; j >=0; j--) {
            if (array[target] < array[j]) {
                [array[target], array[j]] = [array[j], array[target]];
                target = j;
            } else {
                break;
            }
        }
    }
    return array;
};
let result = insertSort([2, 7, 4, 6, 9, 1, 8, 22]);
console.log(result);







