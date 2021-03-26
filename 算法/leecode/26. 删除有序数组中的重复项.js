var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums;

    let start = 1
    while(start < nums.length) {
        if(nums[start] === nums[start - 1]) nums.splice(start,1)
        else start++
    }
    return nums
};

nums = [0,0,1,1,1,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))