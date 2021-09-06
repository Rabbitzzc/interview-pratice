/**
 * 利用数组存储当前i的和为xx，这样形成了 sums 数组（O(n^2)）
 * 同时利用hashMap的技巧，将O(n^2)换算成O(n)
 */

const subarraySum = (nums, k) => {
    if (nums.length === 0) return 0

    const sum = 0
    const obj = {
        0: 1,
    };

    let all = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        // 注意顺序，要先判断存不存在sum - k - 这一行放在最后是存在问题的，比如[-1,-1,1] 0
        if (obj[sum- k]) {
            all += obj[sum- k]
        }
        if (!obj[sum]) {
            obj[sum] = 1
        } else {
            obj[sum]++
        }
    }
    return all
}

const arr = [1, 2, 1, 3, 2, 1]
console.log(subarraySum(arr, 4))