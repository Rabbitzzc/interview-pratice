/** 后续遍历 */
var findTilt = function (root) {
    const postOrderTraversalNode = (node) => {
        if (!node) return 0
        let a = 0,
            b = 0
        // 计算左边的和，计算右边的和，然后求解当前节点的 --- 一定要找出递归关系
        const left = postOrderTraversalNode(node.left)
        const right = postOrderTraversalNode(node.right)
        sum += Math.abs(left - right)

        // 范湖左边和右边的差值
        return left + right + node.val

    }
    let sum = 0
    postOrderTraversalNode(root)
    return sum

};

console.log(0)
b = new Promise((resolve, reject) => {
    console.log(2)
    // resolve(1)
    reject(1)
})

b.then((value) =>{
    console.log(value)
}).then(() =>{
    console.log(3)
})


console.log(4)