/**
 * 这类题目都比较相似，都是通过双指针降低复杂度
 */
var fourSum = function (nums, target) {
    const {
        length
    } = nums
    if (length < 4) return [];

    // 升序
    nums.sort((a, b) => a - b)

    const result = []

    for (let i = 0; i < length - 3; i++) {
        // 去重
        if (length - i - 1 > 3 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < length - 2; j++) {
            // 去重 - 这里很关键，我就在这里糟蹋了很多次了
            if (length - j > 2 && j - 1 !== i && nums[j] === nums[j - 1]) continue;

            // 这么处理是错误的，方向不确定
            // let left = i - 1
            // let right = j + 1
            let left = j + 1
            let right = length - 1

            // 终止条件
            while (left < right) {
                const temp = target - nums[i] - nums[j] - nums[left] - nums[right]
                if (temp < 0) {
                    // 大了
                    right--
                } else if (temp > 0) {
                    left++
                } else {
                    result.push([nums[i], nums[j], nums[left++], nums[right--]])

                    while (nums[left] === nums[left - 1]) left++;
                    while (nums[right] === nums[right + 1]) right--
                }
            }
        }
    }
    return result
};

nums = [1, 0, -1, 0, -2, 2], target = 0
// nums = [], target = 0
// nums = [0], target = 0
nums = [0, 0, 0, 0], target = 0
// nums = [-2, -1, -1, 1, 1, 2, 2], target = 0
console.log(fourSum(nums, target))