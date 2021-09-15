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


/**
 * 非递归方式 - 栈
 * 栈，先进后出，前序遍历为 根 左 右，进栈顺序为右 左
 */
 const preorderTraversal = root => {
    if(!root) return []
    const stack = [root]
    const res = []
    
    while(stack.length) {
        const temp = stack.pop()
        res.push(temp.val)
        if(temp.right) stack.push(temp.right)
        if(temp.left) stack.push(temp.left)
    }
    return res
}
/**
 * 非递归方式 - 迭代方式
 * 使用迭代的方式，根节点查询跟记录,一直找到左节点，然后寻找右节点
 */
const preorderTraversal = root => {
    if(!root) return []

    const stack = []
    const res = [ ]

    let now = root
    while(now || stack.length) {
        while(now) {
            res.push(now.val)
            stack.push(now)
            now = now.left
        }

        const temp = stack.pop()
        temp.right &&  (now = temp.right)
    }

    return res
}