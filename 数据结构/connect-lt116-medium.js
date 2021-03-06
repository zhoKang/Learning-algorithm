// 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// struct Node {
//     int val;
//     Node *left;
//     Node *right;
//     Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// BFS解法
var connect1 = function(root) {
    if (!root) {
        return root;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (i < len - 1) {
                curr.next = queue[0];
            }
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
    return root;
};
// 使用已建立的next指针解法
var connect2 = function(root) {
    if(root) {
        let leftMost = root;
        while (leftMost && leftMost.left) {
            let head = leftMost;
            while(head) {
                head.left.next = head.right;
                head.right.next = head.next ? head.next.left : null;
                head = head.next;
            }
            leftMost = leftMost.left;
        }
    }
    return root;
};
// 递归解法
var connect3 = function(root) {
    if(root) {
        const connect = (a, b) => {
            if(!a){
                return;
            }
            a.next = b;
            connect(a.left, a.right);
            connect(a.right, a.next? a.next.left : null);
        };
        connect(root, null);
    }
    return root;
};


