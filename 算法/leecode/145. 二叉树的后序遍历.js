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
 * 利用 JS，可以实现 UNshift
 */

 var postorderTraversal = function (root) {
    const res = [];
    if(!root) return res;

    let stack = [root]
    while(stack.length) {
        // 吐出根
        const temp = stack.pop()
        res.push(temp.val)
        if(temp.left) stack.push(temp.left)
        if(temp.right) stack.push(temp.right)
    }
    
    return res.reverse()
};

// 利用 unshift，避免 reverse
const postorderTraversal = root => {
    const res = [];
    if(!root) return res;

    while(stack.length) {
        const temp = stack.pop()
        res.unshift(temp.val)
        if(temp.left) stack.push(temp.left)
        if(temp.right) stack.push(temp.right)
    }
    return res
}

/**
 * 跟前序中序，类似，也可以使用迭代的方式去实现，可以先直接遍历到右边
 */
 const postorderTraversal = root => {
    const res = [];
    if(!root) return res;

    let now  = root
    const stack = []

    while(now || stack.length) {
        while(now) {
            res.unshift(now.val)
            stack.push(now)
            now = now.right
        }

        const temp = stack.pop()
        temp.left  && (now = temp.left)
    }  

    return res 
 }