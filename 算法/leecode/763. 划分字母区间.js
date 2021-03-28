/**
 * 题目标记：尽可能多的 -- 比较类似于背包问题，贪心算法
 */

var partitionLabels = function (S) {
    let obj = {}
    for (let i = 0; i < S.length; i++) {
        obj[S[i]] = i // 记录当前最远的位置
    }

    let res = []
    let maxLen = 0
    let start = 0 //开始位置
    for (let i = 0; i < S.length; i++) {
        // 判断区间是否还需要扩大
        maxLen = Math.max(maxLen, obj[S[i]])

        // 当需要扩大，则需要输入数据
        if (i === maxLen) {
            // push 数量 8 ~5 之间一共 8-5 +1 = 4 个数字
            res.push(i - start + 1)
            start = i + 1
        }
    }

    return res
};

S = "ababcbacadefegdehijhklij"
console.log(partitionLabels(S))