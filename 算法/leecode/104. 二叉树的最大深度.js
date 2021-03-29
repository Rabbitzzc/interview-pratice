// 找出递归关系jike
var maxDepth = function (root) {
    // 终止条件
    if (!root) return 0

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};