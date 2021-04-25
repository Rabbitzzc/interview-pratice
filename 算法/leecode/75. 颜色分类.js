// 使用正常的快速排序等等即可
// 或者通过三个数组，分别存储数据，但是空间利用高
// 使用左右 push 与 unshift
var sortColors = function (nums) {
    const {
        length
    } = nums

    if (length === 1) return nums

    let left = 0;
    let right = length - 1

    while (left < right) {
        if (nums[left] === 2 && nums[right] !== 2) {
            const temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }
        if (nums[left] !== 2) ++left
        if (nums[right] === 2) --right
    }
    left = 0
    while (left < right) {
        if (nums[left] === 1 && nums[right] === 0) {
            const temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }
        if (nums[left] !== 1) ++left
        if (nums[right] === 1 || nums[right] === 2) --right
    }
    return nums
};

console.log(sortColors([2, 0, 1, 0, 0, 1, 2, 0, 1, 2, 1, 1, 1, 2, 0]))
console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([1,2,2]))