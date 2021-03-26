/**
 * 思路：对于数组，从左右开始比较，如果是0，则替换位置
 */
var moveZeroes = function (nums) {
    const {
        length
    } = nums;

    if (length === 0) return []

    let left = 0
    let right = length - 1
    while (left < right) {
        if (nums[left] !== 0) {
            left++
        } else if (nums[left] === 0) {
            nums.push(0)
            nums.splice(left,1)
            if(nums[right] === 0) {
                right--
            }
        } 
    }
    return nums
};
// nums = [0,1,0,3,12]
// nums = [0]
nums = [2,0,4,1,0,4,0,9,0,0,0,0,1,0,2,0,0,1,0,0]
// nums = [0,0,1,0,0]
console.log(moveZeroes(nums));