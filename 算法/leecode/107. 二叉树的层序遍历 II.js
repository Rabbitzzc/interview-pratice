/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const res = [];
    const traversal = (node, depth) => {
        if (node === null) return

        // 如果数组不存在
        if (!res[depth]) {
            res[depth] = []
        }

        res[depth].push(node.val)

        if (node.left) traversal(node.left, depth + 1)
        if (node.right) traversal(node.right, depth + 1)
    }
    traversal(root,0)
    return res.reverse()
};