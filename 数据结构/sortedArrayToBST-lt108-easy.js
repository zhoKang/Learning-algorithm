// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
//
// 示例:
//     给定有序数组: [-10,-3,0,5,9], 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
//
//        0
//       / \
//      -3   9
//      /   /
//    -10  5
/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var sortedArrayToBST = function(nums) {
     const helper = (nums, left, right) => {
       if (left > right) {
           return null;
       }
       let mid = left + ((right - left) >> 1);
       let root = new TreeNode(nums[mid]);
       root.left = helper(nums, left, mid - 1);
       root.right = helper(nums, mid + 1, right);
       return root;
     };
    return helper(nums, 0, nums.length - 1);
};
let result = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(result, 'rr');
