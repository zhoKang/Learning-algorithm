// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 问总共有多少条不同的路径？

// 示例 1:
// 输入: m = 3, n = 2
// 输出: 3
// 解释:
//     从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右


// 示例 2:
// 输入: m = 7, n = 3
// 输出: 28
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function(m, n) {
    let dp = Array(n).fill(0).map( _ => Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                dp[0][j] = 1;
            } else if (j === 0) {
                dp[i][0] = 1;
            }else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[n - 1][ m - 1]
};
let result = uniquePaths(3, 2);
console.log(result);


