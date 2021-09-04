// 找到递归关系
/**
 * 前 中 后
 */
 const inorderTraversalNode = (node, list) => {
    if(!node) return;
    inorderTraversalNode(node.left, list)
    list.push(node.val)
    inorderTraversalNode(node.right, list)
}

var inorderTraversal = function (root) {
    let result = []
    inorderTraversalNode(root, result)
    return result
};