/**
 * 中序遍历的翻版
 */

const isValidBST = root => {
    const res = inorderTraversal(root);

    if(res.length <= 1) return true;

    let temp =res[0]
    for(let i = 1; i < res.length; i++) {
        if(temp >= res[i]) return false;
        temp = res[i]
    }
    return true;
}

// 中序遍历
const inorderTraversalNode = (node, list) => {
    if (!node) return;
    inorderTraversalNode(node.left, list)
    list.push(node)
    inorderTraversalNode(node.right, list)
}

var inorderTraversal = function (root) {
    let result = []
    inorderTraversalNode(root, result)
    return result
};

/**
 * 如果该二叉树的左子树不为空，则左子树上所有节点的值均小于它的根节点的值； 
 * 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；它的左右子树也为二叉搜索树。
 * 所以需要知道最小值和最大值
 */

const helpers = (node, min,max) => {
    if(!node) return true;
    if(node.val <= min || node.val >= max) return false;
    return helpers(node.left, min, node.val) && helpers(node.right, node.val, max)
}


const isValidBST = root => helpers(root, -Infinity, Infinity)