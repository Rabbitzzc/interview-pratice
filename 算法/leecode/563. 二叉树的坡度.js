/**
 * 按照题目意思，是从最低找，类似于后续遍历，左右根
 */
const findTilt = function (root) {
    let sum = 0
    const postOrderTraversalNode = (node) => {
        if (!node) return 0

        // 计算左边的和，计算右边的和，然后求解当前节点的 --- 一定要找出递归关系
        const left = postOrderTraversalNode(node.left)
        const right = postOrderTraversalNode(node.right)
        sum += Math.abs(left - right)

        // 范湖左边和右边的差值
        return left + right + node.val

    }
    postOrderTraversalNode(root)
    return sum

};

