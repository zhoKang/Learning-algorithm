// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
// 示例 1:
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:
// "ana"
// 输入: "race a car"
// 输出: false
/**
 * @param {string} s
 * @return {boolean}
 */
/*方法一：双指针方法验证回文串*/
var isPalindrome = function(s) {
    let l = 0;
    let r = s.trim().length;    // 特殊情况  s都是空字符
    if (r === 0) {
        return true;
    }
    let reg = /^[a-z0-9]$/;
    s = s.toLowerCase();
    while (l < r) {
        while(!reg.test(s[l]) && l < r) {
            l++;
        }
        while(!reg.test(s[r]) && l < r) {
            r--;
        }
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

let result = isPalindrome("0P");
console.log(result);