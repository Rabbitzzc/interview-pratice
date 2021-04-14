var widthOfBinaryTree = function (root) {
    const res = [];
    const traversal = (node, depth) => {
        // 如果数组不存在
        if (!res[depth]) {
            res[depth] = []
        }
        if (node === null) {
            res[depth].push(' ')
            return
        }


        res[depth].push('1')

        traversal(node.left, depth + 1)
        traversal(node.right, depth + 1)
    }
    traversal(root, 0)

    console.log(res)

    let max = 0
    for (let i = 0; i < res.length; i++) {
        let temp = res.join('').replace(/(^\s*)|(\s*$)/g,"")
        console.log(temp)
        if (temp.length > max) max = temp.length
    }
    return max
};