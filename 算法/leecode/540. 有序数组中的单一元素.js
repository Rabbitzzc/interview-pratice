// 题目要求二分法
var singleNonDuplicate = function (nums) {

    if (nums.length === 1) return nums[0];
    const mid = Math.floor(nums.length / 2)

    if (nums[mid] === nums[mid - 1]) {
        return (mid % 2) ? singleNonDuplicate(nums.slice(mid + 1)) : singleNonDuplicate(nums.slice(0, mid + 1))
    } else if (nums[mid] === nums[mid + 1]) {
        return (mid % 2) ? singleNonDuplicate(nums.slice(0, mid)) : singleNonDuplicate(nums.slice(mid))
    } else {
        return nums[mid]
    }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]))