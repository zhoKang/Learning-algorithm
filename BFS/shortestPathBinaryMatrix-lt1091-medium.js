// 在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。
// 一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：
// 相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
// C_1 位于 (0, 0)（即，值为 grid[0][0]）
// C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
// 如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
// 返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1 。
// 示例 1：
// 输入：[[0,1],[1,0]]
// 输出：2
// 示例 2：
// 输入：[[0,0,0],[1,1,0],[1,1,0]]
// 输出：4
// 提示：
// 1 <= grid.length == grid[0].length <= 100
// grid[i][j] 为 0 或 1
/**
 * @param {number[][]} grid
 * @return {number}
 * 关键搞清最先到达右下角的就是最短路径
 */
var shortestPathBinaryMatrix = function(grid) {
    let r = grid.length;
    if (grid[0][0] === 1 || grid[r - 1][r - 1] === 1) return -1;
    if (r === 1 && grid[0][0] === 0) return 1;   // 考虑输入为[[0]]的特殊情况
    let queue =[[0, 0]];
    grid[0][0] = 1;
    let res = 1;
    while (queue.length) {
        let len = queue.length;
        let directions = [[1, 0], [1, -1], [0, -1], [-1, -1],
        [-1, 0], [-1, 1], [0, 1], [1, 1]];
        while (len--) {
            let curr = queue.shift();
            for (let i = 0; i < 8; i++) {
                let newx = curr[0] + directions[i][0];
                let newy = curr[1] + directions[i][1];
                if (newx < 0 || newx >= r || newy < 0 || newy >= r) {
                    continue;
                }
                if (grid[newx][newy] === 0) {
                    if (newx === r - 1 && newy === r - 1) return res + 1;
                    queue.push([newx, newy]);
                    grid[newx][newy] = 1;
                }
            }
        }
        res++;
    }
    return -1;
};
let result = shortestPathBinaryMatrix([
   [0]]);
console.log(result);

