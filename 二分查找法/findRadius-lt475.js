// 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
// 现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。
// 所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。
// 说明:
//     给出的房屋和供暖器的数目是非负数且不会超过 25000。
// 给出的房屋和供暖器的位置均是非负数且不会超过10^9。
// 只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
// 所有供暖器都遵循你的半径标准，加热的半径也一样。
// 示例 1:
//
// 输入: [1,2,3],[2]
// 输出: 1
// 解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
// 示例 2:
//
// 输入: [1,2,3,4],[1,4]
// 输出: 1
// 解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let len = houses.length;
    let heatersLen = heaters.length;
    let distance = [];
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let left = 0;
        let right = heatersLen - 1;
        let curr = houses[i];
        while(left < right) {
            let mid = (left + right) >> 1;
            if (heaters[mid] < curr) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (heaters[left] === curr) {
            distance.push(0);
        } else if (heaters[left] < curr) {
            distance.push(curr - heaters[left]);
        } else if (left !== 0) {
            distance.push(Math.min(heaters[left] - curr, curr - heaters[left - 1]));
        } else {
            distance.push(heaters[left] - curr);
        }
    }
    return Math.max(...distance);
};
let result = findRadius([1,2,3,5,15],[2,30]);
console.log(result, 'kkll');