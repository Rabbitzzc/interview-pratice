/**
 * 数组[1,2,3,4]，请实现算法，得到这个数组的全排列的数组，如[2,1,3,4]，[2,1,4,3]。。。。
 * 
 * 思路(1)
 * 数组的排列，等于空间填充，将数组填充到n个空间中，解空间用回溯法。
 * 回溯法（back tracking）（探索与回溯法）是一种选优搜索法，又称为试探法，按选优条件向前搜索，以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为“回溯点”。
 * 思路（2） - O(n^2)
 * 排列 = 当前某个元素 + 剩余元素的全排列
 */

const permute = arr => {
    if (arr.length === 0) return []
    if (arr.length === 1) return [arr]

    let res = []
    for (let i = 0; i < arr.length; i++) {
        const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)))
        rest.forEach(v => res.push([arr[i], ...v]))
    }
    return res
}

/**
 * 如何去重
 * 将数组转为字符串，然后利用 new Set 过滤，然后再转换为数组即可
 */

let result = permute([1, 2, 3, 4])
console.log(result)