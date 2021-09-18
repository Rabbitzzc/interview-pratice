// 找规律即可
// 深度等于当前节点的左节点最大深度 + 右节点的最大深度  L+R+1。
const diameterOfBinaryTree = root => {
    let count = 1
    const depth = node => {
        if (!node) return 0

        let left = depth(node.left)
        let right = depth(node.right)

        // count 为左右节点最大深度之和的最大值
        count = Math.max(count, (left + right + 1))
        return Math.max(left, right) + 1;
    }

    depth(root) 
    return count - 1
}