/** 
 * 双指针 
 * 当前遍历的数nums[i]为一个基准数，遍历数后面的数组为寻找数组
 * 寻找数组中设定两个起点，最左侧的left(i+1)和最右侧的right(length-1)
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    nums.sort((a, b) => a - b)
    if (nums[0] > 0) return []
    let result = []
    for (let i = 0; i < nums.length - 1; i++) {
        // 跳过重复数字
        if (i && nums[i] === nums[i - 1]) {
            continue;
        }
        // 利用双指针，判断
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            // 记录最小的差值
            const tmp = nums[i] + nums[left] + nums[right]
            if (tmp < 0) {
                left++
            } else if (tmp > 0) {
                right--
            } else {
                result.push([nums[i], nums[left++], nums[right--]])
                // 跳过重复数字
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
                // 跳过重复数字
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }
    // 还需要去重 - 超时
    // let news = []
    // result.map(v => v.join(',')).forEach(v => {
    //     if (!news.includes(v)) news.push(v)
    // })
    // return news.map(v => v.split(',').map(v => Number(v)))

    return result
};

// nums = [-1, 0, 1, 2, -1, -4]
// nums = [1, 1, 1]

nums = [0, 0, 0, 0, 0, 0]
console.log(threeSum(nums))