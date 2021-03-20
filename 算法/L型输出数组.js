/**
 * 从上到下，从左到右遍历
 * 然后剔除最外层，利用 js slice 数组方法可以快速剔除外层
 */

const arrInLForm = arr => {
    if (!Array.isArray(arr)) return

    let res = []

    let dfs = arr => {
        // m 表示行
        let m = arr.length
        if (m === 0) return
        if (m === 1) {
            res.push(...arr[0])
            return
        }

        // n 表示列
        let n = arr[0].length
        if (n === 0) return
        if (n === 1) {
            for (let i = 0; i < m; i++) res.push(arr[i][0])
            return
        }

        // push 第一列
        for (let i = 0; i < m; i++) res.push(arr[i][0])

        // 最后一行
        for (let j = 1; j < n; j++) res.push(arr[m - 1][j])

        // 倒序最后一列
        for (let i = m - 2; i >= 0; i--) res.push(arr[i][n - 1])

        // 倒序第一行
        for (let j = n - 2; j >= 1; j--) res.push(arr[0][j])

        // 数组剔除外边
        dfs(arr.slice(1, -1).map(v => v.slice(1, -1)))
    }

    dfs(arr)

    return res
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(arrInLForm(arr))