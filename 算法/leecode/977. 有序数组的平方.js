/**
 * 正常逻辑，就是遍历求平方，然后排序，因此也是 O(nlogn) 的时间复杂度
 * 题目要求 O(n) 的时间复杂度，就不能使用排序
 * 从左右两端，双指针，压栈
 */

// 手写的错误答案 - 从中间最小数开始 - 纯负正没处理
// var sortedSquares = function (nums) {
//     // 首先找到中间的数
//     const {
//         length
//     } = nums;
//     if (length === 0) return []
//     if (length === 1) return [nums[0] * nums[0]]

//     if (length === 2) {
//         if (nums[0] > nums[1]) return [nums[1] * nums[1], nums[0] * nums[0]]
//     }
//     // 如果只有负值，则需要替换
//     // if(nums[length-1] < 0)

//     // 对于同时有正负值的，可以使用如下方案
//     let mid = 0
//     for (let i = 1; i < length; i++) {
//         if (nums[i - 1]*nums[i - 1] >= nums[i] * nums[i] && nums[i + 1]*nums[i + 1] >= nums[i] * nums[i] ) {
//             mid = i
//             break
//         }
//     }


//     let left = mid-1
//     let right = mid+1
//     let result =  [nums[mid]]

//     while (left >= 0 && right < length) {
//         console.log(left, right)
//         // 如果左边比右边大
//         const left_res = nums[left] * nums[left] 
//         const right_res = nums[right] * nums[right]
//         if(left_res > right_res)  {
//             result.push(nums[right++])
//         } else if(left_res < right_res) {
//             result.push(nums[left--])
//         } else {
//             result.push(nums[left--], nums[right++])
//         }
//     }
// };
var sortedSquares = function (nums) {
    const {
        length
    } = nums;
    if (length === 0) return []
    if (length === 1) return [Math.pow(nums[0],2)]

    let left = 0
    let right = length - 1
    let result = []
    while (left <= right) {
        let l_r = Math.pow(nums[left], 2)
        let r_r = Math.pow(nums[right], 2)
        if (l_r < r_r) {
            result.unshift(r_r)
            right--
        } else {
            result.unshift(l_r)
            left++
        }
    }
    return result
}

// nums = [-4,-1,0,3,10]
nums = [-7, -3, 2, 3, 11]
// nums = [-5, -3, -2, -1]
// nums = [-5, -3, -2, -1, 0]
// nums = [-5, -3, -2, -1, 0, 1]
console.log(sortedSquares(nums))