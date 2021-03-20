/**
 * F(0) = 0,   F(1) = 1 F(N) = F(N - 1) + F(N - 2), 其中 N > 1. 给定 N，计算 F(N)。
 */


// 思路1：暴力递归，o(n^2)
const fbnq = n => {
    if(n < 0 ) return
    if(n === 0) return 0
    if(n === 1) return 1
    return fbnq(n-1) + fbnq(n-2)
}

console.log(fbnq(10))

// 利用数据缓存 o(n)
let cache = [0,1]
const fbnq2 = n => {
    if(n < 0 ) return
    return cache[n] !== undefined ? cache[n] : cache[n] = fbnq2(n-1) + fbnq2(n-2)
}

console.log(fbnq2(10))


// 动态规划 跟递归类似，就是将递归，改成了 for 循环
const fbnq3 = n => {
    const dp = [0,1]
    for(let i=2; i<=n; i++) dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
}

console.log(fbnq3(10))