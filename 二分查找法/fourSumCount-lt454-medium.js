// 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
// 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。
// 例如:
//     输入:
//         A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]
// 输出:
//     2
// 解释:
//     两个元组如下:
// 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let map1 = new Map();
    let res = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = A[i] + B[j];
            if (map1.has(sum)) {
                map1.set(sum, map1.get(sum) + 1);
            } else {
                map1.set(sum, 1);
            }
        }
    }
    for (let k = 0; k < C.length; k++) {
        for (let l = 0; l < D.length; l++) {
            let sum = C[k] + D[l];
            if (map1.has(-sum)) {
                res += map1.get(-sum);
            }
        }
    }
    return res;
};