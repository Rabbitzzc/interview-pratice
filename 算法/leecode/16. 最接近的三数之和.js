/**
 * 按照基本做法，就是循环三次，然后。。。。O(n^3)
 * 思路：双指针的特点在于两个，一个是查找匹配，另一个就是求和（其实都是匹配概念），一般求和都会想到双指针（将O(N^2)变为O(n)）
 */
var threeSumClosest = function (nums, target) {
    // 重复的需要去重
    nums.sort((a, b) => a - b)
    let min = 99999999999999 // 记录差值
    for (let i = 1; i < nums.length - 1; i++) {
        // 利用双指针，判断
        let left = i - 1
        let right = i + 1
        while (left >= 0 && right < nums.length) {
            // 记录最小的差值
            const tmp = target - nums[i] - nums[left] - nums[right]
            min = Math.abs(min) > Math.abs(tmp) ? tmp : min
            if (tmp > 0) {
                right++
            } else if (tmp < 0) {
                left--
            } else {
                return target
            }
        }
    }
    return target - min
};
// nums = [-1, 2, 1, -4], target = 1
nums = [0, 1, 2], target = 3

console.log(threeSumClosest(nums, target))