/**
 * 相比于路径总和1，路径总和2，更要求其找出所有路径
 * 也就是需要递归并回溯
 * 回溯的核心就是在于做选择，回溯出口，递归，取消选择，条件变量
 */

const pathSum = (root, targetSum) => {
    if (!root) return []
    const res = []
    dfs(root, targetSum, [], res)
    return res
}

const dfs = (root, targetSum, temp, res) => {
    targetSum -= root.val
    temp.push(root.val)

    if (!root.left && !root.right && targetSum === 0) {
        res.push(temp.slice(0))
    }
    if (root.left) dfs(root.left, targetSum, temp, res)
    if (root.right) dfs(root.right, targetSum, temp, res)

    targetSum += root.val
    temp.pop()
}