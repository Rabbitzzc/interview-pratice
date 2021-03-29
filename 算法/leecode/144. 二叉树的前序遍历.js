// 找到递归关系
/**
 * 前 中 后
 */
const preOrderTraverseNode = (node, list) => {
    if(!node) return;
    list.push(node)
    preOrderTraverseNode(node.left, list)
    preOrderTraverseNode(node.right, list)
}

var preorderTraversal = function (root) {
    let result = []
    preOrderTraverseNode(root, result)
    return result
};