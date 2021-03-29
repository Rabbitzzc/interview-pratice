/**
 * 二叉搜索树的中序遍历是递增的数组，一次你，节点最小距离即为相邻最小值
 */

const inOrderTraverseNode = (node, list) => {
    if (!node) return
    inOrderTraverseNode(node.left, list)
    list.push(node.val)
    inOrderTraverseNode(node.right, list)
}
var minDiffInBST = function (root) {
    const sort_arr = [];
    inOrderTraverseNode(root, sort_arr)

    let min = 9999999999

    for (let i = 0; i < sort_arr.length - 1; i++) {
        min = Math.min(min, sort_arr[i+1] - sort_arr[i])
    }

    return min
};