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
// 这个就是 DFS 深度搜索，使用递归
var levelOrder = function (root) {
    // 伴随着队列
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
    traversal(root, 0)
    return res
};

// 通过先进先出队列也可以 - 参考https://github.com/sisterAn/JavaScript-Algorithms/issues/46
// 这个视频一看就懂 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/
const levelOrderBottom = function (root) {
    if (!root) return []
    let res = [],
        queue = [root] // 辅助队列
    while (queue.length) {
        let curr = [],
            temp = []
        while (queue.length) {
            let node = queue.shift()
            curr.push(node.val)
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        }
        res.push(curr)
        queue = temp
    }
    return res.reverse()
};


const levelOrderBottom = (root) => {
    if(!root) return []

    let res = [], queue = [root]

    while (queue.length) {
        let current = [] // 存储当前队列信息
        let temp = [] // 进入的数据，暂存区
        while (queue.length) {
            const node = queue.shift()
            current.push(node.val)
            if(node.left) temp.push(node.left)
            if(node.right) temp.push(node.right)
        }
        res.push(current)
        queue = temp
    }
}