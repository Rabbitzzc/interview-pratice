/**
 * 回溯，dfs，找到所有路径
 */
const sumNumbers = root => {
    if(!root) return 0
    const res  = []
    backtrack(root, res, '')
    const result = res.reduce((pre,next) => Number(pre) + Number(next),0)
    return result
}

const backtrack = (root, res, temp) => {
    // 出口
    if(!root.left && !root.right) {
        res.push(temp+root.val)
        return
    }
    // 做选择
    temp += root.val
    if(root.left) backtrack(root.left, res, temp)
    if(root.right) backtrack(root.right, res, temp)

    // 取消选择
    temp = temp.slice(0,-1)
}