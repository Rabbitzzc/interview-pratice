/**
 * 移除元素
 * 思路：双指针
*/
var removeElement = function(nums, val) {
    let left = 0
    while(left < nums.length) {
        if(val === nums[left]) {
            nums.splice(left, 1)
        } else {
            left++
        }
    }
    return nums.length
};

nums = [0,1,2,2,3,0,4,2]
// console.log(removeElement(nums,2))
console.log(removeElement([3,2,2,3],3))