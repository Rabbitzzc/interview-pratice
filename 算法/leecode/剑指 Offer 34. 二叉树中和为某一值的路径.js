/**
 * 二叉树的和路径，实际上就是一个遍历同时回溯的过程，利用 dfs + 回溯
 */

const pathSum = (root, target) => {
    if(!root) return []
    const res = []
    backtrack(root, target, [],res)
    return res
}

const backtrack = (root, target,temp, res) => {
    // 做选择
    target -= root.val
    temp.push(root.val)
    
    // 满足条件增加
    if(target === 0) {
        res.push(temp.slice(0))
    }
    
    // 找到出口 - 叶子节点
    if(!root.left && !root.right)  return

    if(root.left) backtrack(root.left, target, temp, res)
    if(root.right) backtrack(root.right, target, temp, res)

    // 撤销选择
    target += root.val
    temp.pop()
}