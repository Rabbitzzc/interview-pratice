const permutation = (s) => {
    if (s.length === 0) return []
    if (s.length <= 1) return [s]

    let result = []
    let queue = s.split('')
    backtracking(queue, result)

    // 消除重复元素
    result.sort()
    return [...new Set(result)]
}


// 回溯 queue 未进队列，current 已经存的，temp 需要进入的字符
const backtracking = (queue, result, temp = '', current = '') => {
    // 现状 加上 temp
    current += temp
    // 终止条件
    if (queue.length === 0) {
        return result.push(current)
    }

    // 选择列表，遍历
    for (let i = 0; i < queue.length; i++) {
        //节点处理
        const item = queue.shift()
        // 递归
        backtracking(queue, result, item, current)
        // 回溯，撤销 - 撤销不能为 UNshift 操作
        queue.push(item)
    }
}

console.log(permutation('abc'))