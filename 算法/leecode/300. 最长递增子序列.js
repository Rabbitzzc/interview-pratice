//  var lengthOfLIS = function (nums) {
//      const {
//          length
//      } = nums
//      const dp = []
//      let res = 1

//      for (let i = 0; i < length; i++) {
//          dp[i] = []
//          for (let j = 0; j < length; j++) {
//              dp[i][j] = 1
//          }
//      }

//      // dp[i][j] = max_dp[i][j] +1  || dp[i][j]
//      for (i = 0; i < length; i++) {
//          for (let j = 0; j < i; j++) {
//              if (nums[i] > num[j]) {
//                  dp[i][i] = Math.max(dp[i][i], dp[i][j] + 1)
//              }
//          }
//          res = Math.max(res, dp[i][i])
//      }
//      return res
//  };


// 上面是双数组，也可以使用单个状态
const lengthOfLIS = nums => {
    const {
        length
    } = nums
    const dp = []
    let result = 0

    for (let i = 0; i < length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        result = Math.max(result, dp[i])
    }

    return result
}

console.log(lengthOfLIS([1, 9, 5, 9, 3]))