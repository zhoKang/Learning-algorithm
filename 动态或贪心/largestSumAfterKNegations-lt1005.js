// 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）
// 以这种方式修改数组后，返回数组可能的最大和。
// 示例 1：
// 输入：A = [4,2,3], K = 1
// 输出：5
// 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
// 示例 2：
// 输入：A = [3,-1,0,2], K = 3
// 输出：6
// 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。
// 示例 3：
// 输入：A = [2,-3,-1,5,-4], K = 2
// 输出：13
// 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。  
// 提示：
// 1 <= A.length <= 10000
// 1 <= K <= 10000
// -100 <= A[i] <= 100
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A = A.sort((a,b) => a - b);
    const getSum = function (array) {
        return array.reduce((curr, next)=>{
            return curr + next;
        });
    };
    let i = 0;
    let odd = 0;
    while (i < K) {
        if (A[i] < 0) {
            A[i] = -A[i];
            odd++;
        } else if (A[i] === 0) {
            break;
        } else {
            let left = K - i;
            A = A.sort((a,b) => a - b);
            if (left % 2 !== 0) {                 // 此处是关键点 经过排序并取反后，前面的均已为正数，故只需要判断剩下的K次是奇数还是偶数即可，若是奇数，则需要再次取反。
                A[0] = -A[0];
            }
            break;
        }
        i++;
    }
    return getSum(A);
};
let result = largestSumAfterKNegations([-2,9,9,8,4], 5);
console.log(result, 'jjj');

