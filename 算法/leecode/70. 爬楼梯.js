/**
 * fn = f(n-1) + f(n-2)
 */
var climbStairs = function (n) {
    let dp = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(10))