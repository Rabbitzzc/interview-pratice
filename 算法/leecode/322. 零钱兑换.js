var coinChange = function (coins, amount) {
    if (amount < 0) return -1
    if (amount === 0) return 0

    // 初始状态 - d[i] 表示当前的硬币个数
    // 凑齐十块等于凑齐子问题的最优解
    const dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            // 选择当前硬币，以及不选择当前硬币
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        } // 状态转移方程
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};

coins = [1, 2, 5], amount = 11

console.log(coinChange(coins, amount))