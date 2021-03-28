var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;

    let start = 2
    while (start < nums.length) {
        if (nums[start] === nums[start - 1] && nums[start] === nums[start - 2]) nums.splice(start, 1)
        else start++
    }
    return nums.length
};

nums = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))