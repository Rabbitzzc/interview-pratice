/**
 * 这个题目的本意其实就是非连续子序列的数组和
 */

const rob = (nums) => {
  let dp = []
  const length = nums.length
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < length; ++i) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  return dp[length - 1]
}

// const arr = [1, 2, 3, 1]

const arr = [2, 7, 9, 3, 1]

console.log(rob(arr))
