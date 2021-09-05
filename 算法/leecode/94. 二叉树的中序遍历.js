// 找到递归关系
/**
 * 前 中 后
 */
const inorderTraversalNode = (node, list) => {
    if (!node) return;
    inorderTraversalNode(node.left, list)
    list.push(node.val)
    inorderTraversalNode(node.right, list)
}

var inorderTraversal = function (root) {
    let result = []
    inorderTraversalNode(root, result)
    return result
};

/**
 * 非递归方式 - 中序遍历
 * 一直递归到左节点，然后 pop 以后，再做右边节点的 push
 * 其实与前序的迭代类似，只是先要让左边打印
 */


const inorderTraversal = root => {
    if (!root) return []
    const stack = []
    const res = []

    let now = root
    // 注意判断条件
    while (stack.length || now) {
        // 一直递归到最左节点
        while (now) {
            stack.push(now)
            now = now.left
        }

        const temp = stack.pop()
        res.push(temp.val)

        temp.right && (now = temp.right)
    }
    return res
}