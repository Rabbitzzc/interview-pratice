/**
 * https://blog.csdn.net/wolfGuiDao/article/details/108359420
 * 回文问题一般都是从字符串的中间向两端扩散
 * 明确状态:dp[i][j] 对字符串s[i..j]，最少需要进行dp[i][j]次插入才能变成回文串，所以 j>=i
 * 明确选择/DP：
 * s[i] === s[j]  dp[i][j] = dp[i+1][j-1]
 * s[i] !== s[j] dp[i][j] = min(dp[i+1][j], dp[i][j-1]) +1
 * 明确 base: 当i == j时dp[i][j] = 0
 * 这里选择从下往上，从左到右
 */
const minInsertions = s => {
    const {
        length
    } = s
    if (length === 0 || length === 1) return 0

    const dp = []

    // 初始化
    for (let i = 0; i < length; i++) {
        dp[i] = []
        for (let j = 0; j < length; j++) {
            dp[i][j] = 0
        }
    }

    // 状态转移方程
    for (let i = length - 1; i >= 0; --i) {
        for (let j = i + 1; j < length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1
            }
        }
    }

    return dp[0][length-1]
}

let s = 'mbadm'

console.log(minInsertions(s))