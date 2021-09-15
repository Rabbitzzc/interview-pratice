class TreeNode {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

// 构造二叉树，实际上就是构造每个节点，通过分治的思想来实现
const buildTree = (preorder, inorder) => {
    if (!preorder.length || !inorder.length) return null;

    // 设置根节点
    const root = new TreeNode(preorder[0], null, null)

    // 根据中序遍历，找到左子树和右子树
    const index = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))

    return root

}