// 滑动窗口
var minSubArrayLen = function (target, nums) {
    let res = 9999999999;
    let {
        length
    } = nums

    if (length === 1) {
        if (target <= nums[0]) {
            return 1
        } else {
            return 0
        }
    }

    let start = 0
    let end = 0
    let sum = nums[start]

    while (start < length && end < length) {
        if (sum < target) {
            sum += nums[++end]
        } else {
            res = Math.min(res, end - start + 1)
            sum -= nums[start++]
        }
    }
    if (res === 9999999999) return 0
    return res
};

// 将数据前面都为前面所有数的和也可以解决

target = 7, nums = [2, 3, 1, 2, 4, 3]
target = 11, nums = [1,1,1,1,1,1,1,1]
target = 4, nums = [1,4,4]

console.log(minSubArrayLen(target, nums))