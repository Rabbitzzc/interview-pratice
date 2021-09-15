// 中序+前序 与 中序+后序，本质上是相同的，前序是第一个为子节点，后序是最后一个为子节点

const buildTree = (inorder, postorder) => {
    if (!postorder.length || !inorder.length) return null;

    // 设置根节点
    const last = postorder[postorder.length - 1]
    const root = new TreeNode(last, null, null)

    // 根据中序遍历，找到左子树和右子树
    const index = inorder.indexOf(last)
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1))
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))

    return root
}