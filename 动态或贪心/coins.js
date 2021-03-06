/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
链接：https://leetcode-cn.com/problems/coin-change
*/
/*示例 1:
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1
示例 2:
输入: coins = [2], amount = 3
输出: -1
说明:你可以认为每种硬币的数量是无限的。*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*方法一：动态规划*/
let coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
/*方法二：DFS*/
let coinChange2 = function (coins, amount) {
    const getChange = function (coins, amount, count) {
        if (amount <= 0) return amount;
        if (count[amount] !== 0) return count[amount];
        let min = Number.MAX_VALUE;
        for (let i = 0; i < coins.length; i++) {
            let res = getChange(coins, amount - coins[i], count);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        count[amount] = (min === Number.MAX_VALUE ? -1 : min);
        return count[amount];
    };
    return getChange(coins, amount, Array(amount + 1).fill(0))
};
let result = coinChange2([1,3,5], 11);
console.log(result);
