/**
 * fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']s
 * 通过画图，可以看到其实就是全排列的翻版 - 回溯 - 找到终止条件，确定参数
 */

const backtracking = (nums, len, res, result) => {
  if (res.length === nums.length) {
    result.push(res.join(''))
    return
  }

  for (let i = 0; i < nums[len].length; ++i) {
    res.push(nums[len][i]) // 做选择
    backtracking(nums, len + 1, res, result)
    res.pop() // 撤销选择
  }
}

const fn = (arr) => {
  let res = []

  if (arr.length === 0) return res

  backtracking(arr, 0, [], res)

  return res
}

console.log(
  fn([
    ['a', 'b'],
    ['n', 'm'],
    ['0', '1'],
  ])
)
