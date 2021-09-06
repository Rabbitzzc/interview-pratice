/**
 * 这个题目，实际上跟数组的全排列是相同的，只是出口不同罢了
 */


const getCombine = (arr, n, target) => {
    const res = []
    traversal(arr, n, res, [], target)
    return res
}

const traversal = (arr, n, res, temp, target) => {
    // 出口
    if (temp.length === n && sum(temp) === target) {
        return res.push(temp.slice(0))
    }
    
    // 做选择
    for (let i = 0; i < arr.length; i++) {
        // 取出第一个数
        const value = arr.shift()
        temp.push(value)
        
        // 递归
        traversal(arr, n, res, temp, target)

        // 撤销选择
        temp.pop()
        arr.push(value)
    }
}

const sum = arr => arr.reduce((a, b) => a + b, 0)

const arr = [1,2,3,4,5,6,7]
console.log(getCombine(arr,3,8))