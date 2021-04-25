var findDuplicate = function(nums) {
    return nums.find(v=>nums.indexOf(v) !== nums.lastIndexOf(v))
};

var findDuplicate = function(nums) {
    const maps = new Set();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if(maps.has(num)) return num;
        maps.add(num);
    }

}

// 二分法解决