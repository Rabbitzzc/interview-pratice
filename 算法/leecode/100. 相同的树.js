/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // 如果都是子节点，为 true
    if (p == null && q == null) return true
    // 如果单个为子节点，返回 false
    if (p == null || q == null) return false

    // 如果两个值不相同，返回 false
    if (p && q && p.val !== q.val) return false

    // 否则比较子节点
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};