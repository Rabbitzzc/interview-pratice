/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

// 根据当前字符串返回对应的字符串
const nextStr = str => {
    let start = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') start += '01'
        if (str[i] === '1') start += '10'
    }
    return start
}

// 柜柜
const recursion = (str, n, N) => {
    if (n === N) {
        return str
    }
    return recursion(nextStr(str), n + 1, N)
}

var kthGrammar = function (N, K) {
    if (K === 1) return 0

    // 向上取整
    // N = Math.floor(Math.sqrt(K)) + 1
    N = Math.ceil(Math.log2(K))
    console.log(N)
    return Number(recursion('0', 1, N)[K - 1])
};

N = 4, K = 5
N = 1, K = 1
N = 30
K = 434991989
console.log(kthGrammar(N, K))

// 上面的方法是可以行，但是会出错，因为当 N 无穷大的时候，导致空间直接爆了，需要优化

var kthGrammar = function (N, K) {
    if (K === 1) return 0 // 终止条件
    return k % 2 ? (kthGrammar(N - 1, (K + 1) / 2) ? 1 : 0) : (kthGrammar(N - 1, (K) / 2) ? 0 : 1)
};