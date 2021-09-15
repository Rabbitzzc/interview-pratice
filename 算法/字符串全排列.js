// 字符串的任意组合

const backtracking = (s, temp, length, result) => {
    if (length === s.length) {
        result.push(temp.concat([]));
    }

    // 从第 length 个开始选择
    for (let i = length; i < s.length; i++) {
        const str = s.slice(length, i + 1)
        // 做选择
        temp.push(str)
        backtracking(s, temp, i + 1, result)
        temp.pop()
    }
}

const fn = s => {
    const result = []
    backtracking(s,[],0,result)
    return result
}

console.log(fn('aab'))