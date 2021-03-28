const subsets = (nums) => {
    if (nums.length === 0) return []

    if (nums.length === 1) return [
        [], nums
    ]

    // 排序
    nums.sort((a, b) => a - b)
    let result = []
    backtracking(nums, result, [], 0)
    return result
}

/**
 * 需要的参数有哪些呢
 * 结果 result，当前的queue队列，
 */
const backtracking = (nums, result, temp, start) => {
    // js 引用-注意
    result.push([...temp])

    for (let i = start; i < nums.length; i++) {
        // 注入
        temp.push(nums[i])
        backtracking(nums, result, temp, ++start) // 保证顺序 - 因此是无需的组合，将 start++ 即可
        // 弹出 - 回退
        temp.pop()
    }
}

nums = [1, 2, 3]

console.log(subsets(nums))