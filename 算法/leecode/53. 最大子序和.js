// 最大子序列和
/**
 * O(n) 思路：对于前面的子序列，如果>0，则可以需要，如果<0，则需要丢弃，也就是动态规划
 * dp[n] = dp[n-1] + nums[n] dp[n-1]>0
 * dp[n] = nums[n]  dp[n-1] < 0
 */
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = 0
  for (let num of nums) {
    if (sum > 0) sum += num
    else sum = num
    res = Math.max(res, sum)
  }
  return res
}
