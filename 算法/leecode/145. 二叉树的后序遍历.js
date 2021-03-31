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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const res = [];
    const postorder = node => {
        if (!node) return

        postorder(node.left)
        postorder(node.right)
        res.push(node.val)
    }
    postorder(root)
    return res
};

/**
 * 递归可能比较简单，有没有迭代的过程，利用 dfs + 栈（现金后出）
 * 递归是向上回溯访问的，而迭代不能返回，因此可以将思路返过来
 * 后续为 左右根  反过来即为根右左
 */

 var postorderTraversal = function (root) {
    const res = [];
    if(!root) return res;

    let stack = [root]
    while(stack.length) {
        // 吐出根
        const item = stack.pop();
        if(item) {
            res.push(item.val)
            stack.push(item.left);
            stack.push(item.right);
        }
    }
    
    return res.reverse();
};
